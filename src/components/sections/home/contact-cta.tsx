import { ContactForm } from "@/components/ui/contact-form"
import { Reveal } from "@/components/ui/reveal"
import type { Dictionary } from "@/i18n/dictionaries"

type ContactCtaProps = {
  copy: Pick<Dictionary, "contact" | "form">
}

export function ContactCta({ copy }: ContactCtaProps) {
  return (
    <section id="contact" aria-labelledby="contact-cta-heading" data-scene="contact" data-accent="#4f7cff" className="section-shell contact-section">
      <div className="layout-grid contact-grid">
        <div className="eyebrow">{copy.contact.eyebrow}</div>
        <Reveal className="contact-heading">
          <h2 id="contact-cta-heading">{copy.contact.heading}</h2>
          <p>{copy.contact.subheading}</p>
        </Reveal>
        <div className="contact-aside">
          <span>{copy.contact.preferEmail}</span>
          <a href="mailto:agastyo2004@gmail.com">agastyo2004@gmail.com</a>
          <div className="contact-socials">
            <a href="https://github.com/Al-gast" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/agastyo-atallah-al-ardhi/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <Reveal className="contact-form-wrap" delay={0.08}>
          <ContactForm copy={copy.form} />
        </Reveal>
      </div>
    </section>
  )
}
