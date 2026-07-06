import type { Dictionary } from "@/i18n/dictionaries"

export function Footer({ copy }: { copy: Dictionary["footer"] }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-rule" />
      <div className="site-footer-grid">
        <p>Agastyo Atallah</p>
        <p>{copy.role}</p>
        <div className="site-footer-links">
          <a href="mailto:agastyo2004@gmail.com">{copy.email}</a>
          <a href="https://github.com/Al-gast" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/agastyo-atallah-al-ardhi/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="site-footer-copy">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
