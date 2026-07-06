"use client"

import { useEffect, useRef } from "react"

type CursorState = "default" | "interactive" | "view"

export function CustomCursor({ viewLabel = "View" }: { viewLabel?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor) {
      return
    }

    const cursorElement = cursor
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    let frameId: number | null = null
    let hasPosition = false
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0
    let cursorState: CursorState = "default"

    function isEnabled() {
      return finePointer.matches && !reducedMotion.matches
    }

    function updateState(target: EventTarget | null) {
      if (!(target instanceof Element)) {
        return
      }

      const nextState: CursorState = target.closest('[data-cursor="view"]')
        ? "view"
        : target.closest("a, button")
          ? "interactive"
          : "default"

      if (nextState !== cursorState) {
        cursorState = nextState
        cursorElement.dataset.state = nextState
      }
    }

    function animatePosition() {
      currentX += (targetX - currentX) * 0.24
      currentY += (targetY - currentY) * 0.24
      cursorElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        frameId = window.requestAnimationFrame(animatePosition)
      } else {
        currentX = targetX
        currentY = targetY
        cursorElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
        frameId = null
      }
    }

    function schedulePosition() {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(animatePosition)
      }
    }

    function hideCursor() {
      cursorElement.style.opacity = "0"
      cursorState = "default"
      cursorElement.dataset.state = "default"
      hasPosition = false

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
        frameId = null
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (!isEnabled() || event.pointerType !== "mouse") {
        hideCursor()
        return
      }

      targetX = event.clientX
      targetY = event.clientY
      updateState(event.target)

      if (!hasPosition) {
        currentX = targetX
        currentY = targetY
        cursorElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
        hasPosition = true
      }

      cursorElement.style.opacity = "1"
      schedulePosition()
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        hideCursor()
      }
    }

    function handlePreferenceChange() {
      if (!isEnabled()) {
        hideCursor()
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("blur", hideCursor)
    window.addEventListener("keydown", handleKeyDown)
    document.documentElement.addEventListener("pointerleave", hideCursor)
    finePointer.addEventListener("change", handlePreferenceChange)
    reducedMotion.addEventListener("change", handlePreferenceChange)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("blur", hideCursor)
      window.removeEventListener("keydown", handleKeyDown)
      document.documentElement.removeEventListener("pointerleave", hideCursor)
      finePointer.removeEventListener("change", handlePreferenceChange)
      reducedMotion.removeEventListener("change", handlePreferenceChange)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-state="default"
      className="group pointer-events-none fixed top-0 left-0 z-[100] opacity-0 transition-opacity duration-150 motion-reduce:hidden motion-reduce:transition-none"
    >
      <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 bg-accent/10 transition-[transform,background-color,border-color] duration-150 ease-out group-data-[state=interactive]:scale-150 group-data-[state=view]:scale-[3.25] group-data-[state=view]:border-accent/50 group-data-[state=view]:bg-page/85" />
      <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold tracking-wide text-text uppercase opacity-0 transition-opacity duration-150 group-data-[state=view]:opacity-100">
        {viewLabel}
      </span>
    </div>
  )
}
