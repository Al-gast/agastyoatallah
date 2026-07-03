"use client"

import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({
  children,
  className,
  strength = 6,
}: MagneticProps) {
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const magneticElement = element
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    const maxOffset = Math.min(8, Math.max(4, strength))
    let frameId: number | null = null
    let offsetX = 0
    let offsetY = 0

    function isEnabled() {
      return finePointer.matches && !reducedMotion.matches
    }

    function updateTransform() {
      magneticElement.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
      frameId = null
    }

    function scheduleTransform() {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateTransform)
      }
    }

    function resetTransform() {
      offsetX = 0
      offsetY = 0
      scheduleTransform()
    }

    function handlePointerMove(event: PointerEvent) {
      if (
        !isEnabled() ||
        event.pointerType !== "mouse" ||
        magneticElement.matches(":focus-within")
      ) {
        resetTransform()
        return
      }

      const bounds = magneticElement.getBoundingClientRect()
      const halfWidth = bounds.width / 2
      const halfHeight = bounds.height / 2

      offsetX = ((event.clientX - bounds.left - halfWidth) / halfWidth) * maxOffset
      offsetY =
        ((event.clientY - bounds.top - halfHeight) / halfHeight) * maxOffset
      scheduleTransform()
    }

    function handlePreferenceChange() {
      if (!isEnabled()) {
        resetTransform()
      }
    }

    magneticElement.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    })
    magneticElement.addEventListener("pointerleave", resetTransform)
    magneticElement.addEventListener("pointercancel", resetTransform)
    magneticElement.addEventListener("focusin", resetTransform)
    finePointer.addEventListener("change", handlePreferenceChange)
    reducedMotion.addEventListener("change", handlePreferenceChange)

    return () => {
      magneticElement.removeEventListener("pointermove", handlePointerMove)
      magneticElement.removeEventListener("pointerleave", resetTransform)
      magneticElement.removeEventListener("pointercancel", resetTransform)
      magneticElement.removeEventListener("focusin", resetTransform)
      finePointer.removeEventListener("change", handlePreferenceChange)
      reducedMotion.removeEventListener("change", handlePreferenceChange)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [strength])

  return (
    <span
      ref={elementRef}
      className={`inline-flex transition-transform duration-150 ease-out motion-reduce:transition-none ${className ?? ""}`}
    >
      {children}
    </span>
  )
}
