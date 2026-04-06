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

// ─── Nonce & CSP ─────────────────────────────────────────────────────────────

function generateNonce() {
  return Buffer.from(crypto.randomUUID()).toString('base64')
}

function buildCSP(nonce) {
  return [
    "default-src 'self'",
    // unsafe-eval kept for Framer Motion; unsafe-inline removed in favour of nonce
    `script-src 'self' 'nonce-${nonce}' 'unsafe-eval' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://*.beamanalytics.com https://beamanalytics.com https://api.fontshare.com https://static.hsappstatic.net https://js.hs-scripts.com https://js.hsforms.net https://plausible.io https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://cdn.weglot.com https://weglot.com https://static.hsappstatic.net https://js.hsforms.net https://fonts.googleapis.com",
    "img-src 'self' data: https://cdn.weglot.com https://weglot.com https://cdn-api-weglot.com https:",
    "font-src 'self' https://api.fontshare.com data: https://static.hsappstatic.net https://js.hsforms.net https://fonts.gstatic.com",
    // Specific domains only — wildcard https: removed
    "connect-src 'self' https://cdn.weglot.com https://weglot.com https://api.weglot.com https://cdn-api-weglot.com https://beamanalytics.b-cdn.net https://beamanalytics.com https://*.beamanalytics.com https://api.hubapi.com https://api.hubspot.com https://content.request.finance https://plausible.io https://www.googletagmanager.com https://www.google-analytics.com",
    "frame-src 'self' https://content.request.finance https://app.hubspot.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self' https://forms.hubspot.com",
    "upgrade-insecure-requests",
  ].join('; ')
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

  // 2. Nonce + CSP — applied to all page requests
  const nonce = generateNonce()
  const csp = buildCSP(nonce)

  // Pass the nonce to Server Components via a request header
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  // Set CSP on the response (overrides the static one in next.config.mjs)
  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)$).*)',
  ],
}
