import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { defaultLocale, isLocale } from "@/i18n/config"

const sectionRedirects: Record<string, string> = {
  "/about": "about",
  "/contact": "contact",
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameLocale = pathname.split("/")[1]
  if (isLocale(pathnameLocale)) return NextResponse.next()

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  const locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : defaultLocale
  const section = sectionRedirects[pathname]

  if (section) {
    const destination = new URL("/" + locale, request.url)
    destination.hash = section
    return NextResponse.redirect(destination)
  }

  request.nextUrl.pathname =
    "/" + locale + (pathname === "/" ? "" : pathname)
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
