"use client"

import { useTheme } from "@/components/theme/theme-provider"

type ThemeToggleProps = {
  toLightLabel: string
  toDarkLabel: string
}

export function ThemeToggle({ toLightLabel, toDarkLabel }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const label = theme === "dark" ? toLightLabel : toDarkLabel

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true" className="theme-icon theme-icon-sun">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
      <span aria-hidden="true" className="theme-icon theme-icon-moon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
        </svg>
      </span>
    </button>
  )
}
