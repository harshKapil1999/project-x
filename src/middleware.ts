import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const cookieStore = cookies()
    const hasCookie = cookieStore.has('mindprism-token')
    if(!hasCookie) return NextResponse.redirect(new URL('/sign-in', request.url))

  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}