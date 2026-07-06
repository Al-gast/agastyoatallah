import Image from "next/image"

import { Reveal } from "@/components/ui/reveal"
import type { Dictionary } from "@/i18n/dictionaries"

export function AboutSection({ copy }: { copy: Dictionary["about"] }) {
  return (
    <section id="about" aria-labelledby="about-heading" data-scene="about" data-accent="#8a63ff" className="section-shell about-section">
      <div className="layout-grid about-grid">
        <div className="eyebrow">{copy.eyebrow}</div>
        <Reveal className="about-portrait">
          <div className="portrait-orbit" aria-hidden="true" />
          <Image src="/profile-about-hd.png" alt="Agastyo Atallah" width={250} height={250} sizes="(max-width: 800px) 60vw, 25vw" />
          <span>{copy.location}</span>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <h2 id="about-heading">{copy.heading}</h2>
          <p>{copy.body}</p>
          <a href="mailto:agastyo2004@gmail.com" className="text-link">
            {copy.hello} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <div className="principles-list">
          {copy.principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{"0" + (index + 1)}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
