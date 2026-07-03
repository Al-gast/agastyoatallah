"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className="mx-auto my-8 flex max-w-3xl justify-center gap-8 px-4 text-foreground lg:my-16"
      >
        {navigation.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative isolate text-sm font-semibold tracking-wide uppercase transition-colors ${
                isActive
                  ? "nav-link-active"
                  : "text-muted-strong hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
