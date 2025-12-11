import { NextResponse } from 'next/server'

// Simple in-memory rate limiting store
// For production, consider using Redis (e.g., @upstash/ratelimit)
const rateLimitStore = new Map()

// Clean up old entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key)
      }
    }
  }, 5 * 60 * 1000)
}

function getRateLimitKey(request) {
  // Use IP address for rate limiting
  const ip = request.ip ?? 
             request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 
             request.headers.get('x-real-ip') ??
             'unknown'
  return ip
}

function checkRateLimit(key, limit = 10, windowMs = 10000) {
  const now = Date.now()
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { success: true, remaining: limit - 1, reset: now + windowMs }
  }
  
  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime }
  }
  
  // Increment count
  record.count++
  return { 
    success: true, 
    remaining: limit - record.count, 
    reset: record.resetTime 
  }
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname
  
  // Apply rate limiting to API routes and feeds
  if (pathname.endsWith('/feed.xml') || pathname.startsWith('/api/')) {
    const key = getRateLimitKey(request)
    const { success, remaining, reset } = checkRateLimit(key, 10, 10000) // 10 requests per 10 seconds
    
    if (!success) {
      const retryAfter = Math.ceil((reset - Date.now()) / 1000)
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
          'Retry-After': retryAfter.toString(),
          'Content-Type': 'text/plain',
        }
      })
    }
    
    // Add rate limit headers to successful responses
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', '10')
    response.headers.set('X-RateLimit-Remaining', remaining.toString())
    response.headers.set('X-RateLimit-Reset', reset.toString())
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*', '/blog/feed.xml', '/customers/feed.xml'],
}

