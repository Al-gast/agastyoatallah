"use client"

import { useEffect, useState } from "react"

type Section = { id: string; label: string }

export function CaseStudyNav({
  sections,
  label,
}: {
  sections: Section[]
  label: string
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
    )
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="case-progress" aria-label={label}>
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={"#" + section.id}
          className={active === section.id ? "is-active" : ""}
        >
          <span>{"0" + (index + 1)}</span>
          {section.label}
        </a>
      ))}
    </nav>
  )
}
