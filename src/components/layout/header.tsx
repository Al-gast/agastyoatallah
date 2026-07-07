"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"

type HeaderProps = {
  locale: Locale
  copy: Pick<Dictionary, "nav" | "language" | "theme">
}

export function Header({ locale, copy }: HeaderProps) {
  const pathname = usePathname()
  const homePath = "/" + locale
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const navigation = useMemo(
    () => [
      { id: "experience", label: copy.nav.experience },
      { id: "work", label: copy.nav.work },
      { id: "lab", label: copy.nav.lab },
      { id: "about", label: copy.nav.about },
      { id: "contact", label: copy.nav.contact },
    ],
    [copy.nav],
  )

  useEffect(() => {
    if (pathname !== homePath) return
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    let raf = 0
    function updateActiveSection() {
      raf = 0
      const trigger = window.innerHeight * 0.4
      let current = ""
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= trigger) {
          current = section.id
        }
      }
      setActiveSection(current)
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(updateActiveSection)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    updateActiveSection()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [homePath, navigation, pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 50)
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
        return
      }
      if (event.key !== "Tab" || !navRef.current) return
      const focusable = Array.from(
        navRef.current.querySelectorAll<HTMLElement>("a, button"),
      ).filter((element) => !element.hasAttribute("disabled"))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [menuOpen])

  const currentSection = (() => {
    if (pathname === homePath) return activeSection
    if (pathname === homePath + "/lab") return "lab"
    if (pathname === homePath + "/experience") return "experience"
    if (pathname?.startsWith(homePath + "/work/")) return "work"
    return ""
  })()

  function hrefFor(id: string) {
    return pathname === homePath ? "#" + id : homePath + "#" + id
  }

  const controls = (
    <>
      <LanguageSwitcher
        locale={locale}
        label={copy.language.label}
        englishLabel={copy.language.english}
        indonesianLabel={copy.language.indonesian}
        onSwitch={() => setMenuOpen(false)}
      />
      <ThemeToggle
        toLightLabel={copy.theme.toLight}
        toDarkLabel={copy.theme.toDark}
      />
    </>
  )

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href={homePath + "#top"}
          className="wordmark"
          onClick={() => setMenuOpen(false)}
        >
          <span>AGASTYO</span>
          <span className="wordmark-mark">/DEV</span>
        </Link>
        <button
          ref={menuToggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? copy.nav.close : copy.nav.menu}</span>
          <span aria-hidden="true" className="menu-toggle-glyph">
            {menuOpen ? "×" : "+"}
          </span>
        </button>
        <nav
          ref={navRef}
          id="primary-navigation"
          aria-label={copy.nav.primaryLabel}
          className={"primary-navigation " + (menuOpen ? "is-open" : "")}
        >
          <div className="primary-navigation-links">
            {navigation.map((item, index) => {
              const isActive = currentSection === item.id
              return (
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  key={item.id}
                  href={hrefFor(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-active-marker" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
          <div className="mobile-header-controls">{controls}</div>
        </nav>
        <div className="desktop-header-controls">{controls}</div>
      </div>
    </header>
  )
}
