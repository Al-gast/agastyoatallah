import Link from "next/link"

import { Magnetic } from "@/components/ui/magnetic"
import { Reveal } from "@/components/ui/reveal"
import type { Dictionary } from "@/i18n/dictionaries"

export function HomeHero({ copy }: { copy: Dictionary["hero"] }) {
  return (
    <section id="top" data-scene="hero" data-accent="#4f7cff" className="hero-section">
      <div className="layout-grid hero-grid">
        <Reveal className="hero-kicker">
          <span className="status-dot" />
          {copy.kicker}
        </Reveal>
        <Reveal className="hero-copy" delay={0.08}>
          <h1 id="hero-title">
            {copy.titleBefore} <em>{copy.titleEmphasis}</em> {copy.titleAfter}
          </h1>
        </Reveal>
        <Reveal className="hero-intro" delay={0.18}>
          <p>{copy.intro}</p>
          <div className="hero-actions">
            <Magnetic>
              <Link href="#work" className="button button-primary">
                {copy.explore} <span aria-hidden="true">↓</span>
              </Link>
            </Magnetic>
            <Link href="#contact" className="text-link">
              {copy.conversation} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
        <div className="hero-meta" aria-label={copy.location + " / " + copy.focus}>
          <span>{copy.location}</span>
          <span>{copy.focus}</span>
          <span>{copy.scroll}</span>
        </div>
      </div>
    </section>
  )
}
