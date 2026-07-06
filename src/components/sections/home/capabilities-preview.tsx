import { Reveal } from "@/components/ui/reveal"
import type { Dictionary } from "@/i18n/dictionaries"

export function CapabilitiesPreview({
  copy,
}: {
  copy: Dictionary["capabilities"]
}) {
  return (
    <section aria-labelledby="capabilities-heading" data-scene="capabilities" data-accent="#4f7cff" className="section-shell capabilities-section">
      <div className="section-heading layout-grid">
        <div className="eyebrow">{copy.eyebrow}</div>
        <div>
          <h2 id="capabilities-heading">{copy.heading}</h2>
          <p>{copy.intro}</p>
        </div>
      </div>
      <div className="capability-list page-gutter">
        {copy.items.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.04}>
            <article className="capability-row">
              <span>{"0" + (index + 1)}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
