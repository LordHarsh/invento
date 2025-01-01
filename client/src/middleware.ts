// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUserAction } from '@/lib/actions/currentUser'

export async function middleware(request: NextRequest) {
  const reqPathname = request.nextUrl.pathname
  const sessionCookie = request.cookies.get('invento-session')
  const userDataCookie = request.cookies.get('user-data')

  // Auth routes handling
  if ((reqPathname.startsWith('/login') || reqPathname.startsWith('/signup')) && sessionCookie?.value) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Protected routes handling
  if (reqPathname.startsWith('/dashboard')) {
    if (!sessionCookie?.value) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      // Only fetch user data if not already in cookies
      if (!userDataCookie?.value) {
        const userResponse = await getCurrentUserAction()

        if (!userResponse.success || !userResponse.data) {
          const redirectResponse = NextResponse.redirect(new URL('/login', request.url))
          redirectResponse.cookies.delete('invento-session')
          redirectResponse.cookies.delete('user-data')
          return redirectResponse
        }

        // Set user data in cookies
        const response = NextResponse.next()
        response.cookies.set('user-data', JSON.stringify({
          id: userResponse.data.id,
          name: userResponse.data?.name || "Hello harsh",
          email: userResponse.data.email,
        }), {
          secure: true,
          sameSite: 'strict',
          path: '/',
        })
        return response
      }

      return NextResponse.next()
    } catch {
      // console.log("Error in middleware:", error)
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('invento-session')
      response.cookies.delete('user-data')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Exclude static files and public assets
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
    // Include specific routes you want to protect
    '/dashboard/:path*',
    '/login',
    '/signup',
  ],
}