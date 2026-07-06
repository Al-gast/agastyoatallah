"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const current = document.documentElement.dataset.theme
    const frameId = window.requestAnimationFrame(() => {
      setTheme(current === "light" ? "light" : "dark")
    })

    if (window.localStorage.getItem("portfolio-theme")) {
      return () => window.cancelAnimationFrame(frameId)
    }

    const media = window.matchMedia("(prefers-color-scheme: light)")
    const syncWithSystem = () => {
      const nextTheme: Theme = media.matches ? "light" : "dark"
      document.documentElement.dataset.theme = nextTheme
      setTheme(nextTheme)
    }

    media.addEventListener("change", syncWithSystem)
    return () => {
      window.cancelAnimationFrame(frameId)
      media.removeEventListener("change", syncWithSystem)
    }
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme() {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark"
        document.documentElement.dataset.theme = nextTheme
        document.documentElement.style.colorScheme = nextTheme
        window.localStorage.setItem("portfolio-theme", nextTheme)
        setTheme(nextTheme)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
