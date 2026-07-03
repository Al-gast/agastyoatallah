"use client"

import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

type HeroSpotlightProps = {
  children: ReactNode
}

export function HeroSpotlight({ children }: HeroSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const spotlight = spotlightRef.current

    if (!container || !spotlight) {
      return
    }

    const hero = container
    const spotlightLayer = spotlight

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    let frameId: number | null = null
    let pointerX = 0
    let pointerY = 0

    function isEnabled() {
      return finePointer.matches && !reducedMotion.matches
    }

    function updatePosition() {
      spotlightLayer.style.setProperty("--spotlight-x", `${pointerX}px`)
      spotlightLayer.style.setProperty("--spotlight-y", `${pointerY}px`)
      frameId = null
    }

    function queuePosition(event: PointerEvent) {
      if (!isEnabled() || event.pointerType !== "mouse") {
        return
      }

      const bounds = hero.getBoundingClientRect()
      pointerX = event.clientX - bounds.left
      pointerY = event.clientY - bounds.top

      if (frameId === null) {
        frameId = window.requestAnimationFrame(updatePosition)
      }
    }

    function showSpotlight(event: PointerEvent) {
      if (!isEnabled() || event.pointerType !== "mouse") {
        return
      }

      queuePosition(event)
      spotlightLayer.style.opacity = "1"
    }

    function hideSpotlight() {
      spotlightLayer.style.opacity = "0"
    }

    function handlePreferenceChange() {
      if (!isEnabled()) {
        hideSpotlight()
      }
    }

    hero.addEventListener("pointerenter", showSpotlight)
    hero.addEventListener("pointermove", queuePosition, { passive: true })
    hero.addEventListener("pointerleave", hideSpotlight)
    hero.addEventListener("pointercancel", hideSpotlight)
    finePointer.addEventListener("change", handlePreferenceChange)
    reducedMotion.addEventListener("change", handlePreferenceChange)

    return () => {
      hero.removeEventListener("pointerenter", showSpotlight)
      hero.removeEventListener("pointermove", queuePosition)
      hero.removeEventListener("pointerleave", hideSpotlight)
      hero.removeEventListener("pointercancel", hideSpotlight)
      finePointer.removeEventListener("change", handlePreferenceChange)
      reducedMotion.removeEventListener("change", handlePreferenceChange)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="relative isolate overflow-hidden">
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-200 motion-reduce:hidden motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(420px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgb(125 185 182 / 0.1), transparent 68%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
