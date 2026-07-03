"use client"

import type { ReactNode } from "react"
import { useEffect, useLayoutEffect } from "react"
import { useAnimate, useInView, useReducedMotion } from "motion/react"

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion()

  useLayoutEffect(() => {
    const element = scope.current

    if (!element) {
      return
    }

    const controls = animate(
      element,
      {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 16,
      },
      { duration: 0 },
    )

    return () => controls.stop()
  }, [animate, scope, shouldReduceMotion])

  useEffect(() => {
    const element = scope.current

    if (!element || !isInView || shouldReduceMotion) {
      return
    }

    const controls = animate(
      element,
      { opacity: 1, y: 0 },
      { duration: 0.45, ease: "easeOut" },
    )

    return () => controls.stop()
  }, [animate, isInView, scope, shouldReduceMotion])

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}
