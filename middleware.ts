import { NextResponse, type NextRequest } from 'next/server'
import { COOKIE_NAME, verifySession } from '@/lib/auth/session'

/* Runs on the Edge runtime, so it can do exactly two things: check the
   session cookie's signature, and check the request's origin.

   It cannot reach MongoDB, so it cannot know whether a session was revoked
   or an account disabled — currentAdmin() in lib/auth/admin.ts checks that
   inside the route handler. Middleware is the cheap first gate that keeps
   unauthenticated traffic away from the panel entirely; it is not the only
   gate. */

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}

const PUBLIC = ['/admin/login', '/api/admin/login']

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl

  /* Same-origin check on anything that changes state. Combined with
     SameSite=Lax on the cookie this covers CSRF without a token round-trip. */
  if (!['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    const source = req.headers.get('origin') ?? req.headers.get('referer')
    if (source && !source.startsWith(origin)) {
      return new NextResponse('Bad origin', { status: 403 })
    }
  }

  if (PUBLIC.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next()
  }

  const token = req.cookies.get(COOKIE_NAME)?.value
  const claims = token ? await verifySession(token) : null

  if (!claims || claims.kind !== 'admin') {
    /* an API call gets a status it can act on; a page gets sent to the login
       screen with somewhere to return to */
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
    }
    const login = new URL('/admin/login', req.url)
    if (pathname !== '/admin') login.searchParams.set('next', pathname)
    return NextResponse.redirect(login)
  }

  return NextResponse.next()
}
