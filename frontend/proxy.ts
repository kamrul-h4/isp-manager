import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const protectedRoutes = [
  "/dashboard",
  "/customers",
  "/organizations",
  "/packages",
  "/payments",
  "/users",
  "/settings",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("authorization")?.replace("Bearer ", "")

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

  // 1. If accessing protected route but no token → redirect to login
  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // 2. If logged in but visiting `/` or `/login` → redirect to dashboard
  if (token && ["/login"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/:path*",
    "/customers/:path*",
    "/organizations/:path*",
    "/packages/:path*",
    "/payments/:path*",
    "/users/:path*",
    "/settings/:path*",
  ],
}
