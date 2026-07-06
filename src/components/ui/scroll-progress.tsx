"use client"

import { motion, useScroll } from "motion/react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <div className="scroll-progress scroll-progress-vertical" aria-hidden="true">
        <motion.span style={{ scaleY: scrollYProgress }} />
      </div>
      <div className="scroll-progress scroll-progress-horizontal" aria-hidden="true">
        <motion.span style={{ scaleX: scrollYProgress }} />
      </div>
    </>
  )
}
