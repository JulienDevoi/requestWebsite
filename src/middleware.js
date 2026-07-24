import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ─── Distributed rate limiter (Upstash Redis) ───────────────────────────────
// Falls back to in-memory when UPSTASH_REDIS_REST_URL / _TOKEN are not set.

let upstashLeads = null
let upstashDefault = null

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

  upstashLeads = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '10 s'),
    prefix: 'rl:leads',
    analytics: true,
  })

  upstashDefault = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '10 s'),
    prefix: 'rl:api',
    analytics: true,
  })
}

// ─── In-memory fallback ──────────────────────────────────────────────────────

const inMemoryStore = new Map()

if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, value] of inMemoryStore.entries()) {
      if (now > value.resetTime) inMemoryStore.delete(key)
    }
  }, 5 * 60 * 1000)
}

function inMemoryCheck(key, limit, windowMs) {
  const now = Date.now()
  const record = inMemoryStore.get(key)

  if (!record || now > record.resetTime) {
    inMemoryStore.set(key, { count: 1, resetTime: now + windowMs })
    return { success: true, remaining: limit - 1, reset: now + windowMs }
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime }
  }

  record.count++
  return { success: true, remaining: limit - record.count, reset: record.resetTime }
}

// ─── Middleware ───────────────────────────────────────────────────────────────

function getClientIP(request) {
  return (
    request.ip ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname

  // 1. Rate limiting — API routes and feed endpoints only
  if (pathname.endsWith('/feed.xml') || pathname.startsWith('/api/')) {
    const ip = getClientIP(request)
    const isLeads = pathname === '/api/leads'

    let allowed = true
    let remaining = 0
    let reset = Date.now() + 10000
    let limit = isLeads ? 5 : 10

    if (upstashLeads && upstashDefault) {
      const rl = isLeads ? upstashLeads : upstashDefault
      const result = await rl.limit(ip)
      allowed = result.success
      remaining = result.remaining
      reset = result.reset
    } else {
      const result = inMemoryCheck(ip, limit, 10000)
      allowed = result.success
      remaining = result.remaining
      reset = result.reset
    }

    if (!allowed) {
      const retryAfter = Math.ceil((reset - Date.now()) / 1000)
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': String(remaining),
          'X-RateLimit-Reset': String(reset),
          'Retry-After': String(retryAfter),
          'Content-Type': 'text/plain',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)$).*)',
  ],
}
