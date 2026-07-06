"use client"

import Image from "next/image"
import { motion } from "motion/react"
import type { CSSProperties, PointerEvent } from "react"
import { useState } from "react"

import { localize, type Locale } from "@/i18n/config"
import type { Experiment } from "@/types/experiment"

type ExperimentStageProps = {
  experiment: Experiment
  locale: Locale
  compact?: boolean
}

type Pointer = { x: number; y: number }

export function ExperimentStage({
  experiment,
  locale,
  compact = false,
}: ExperimentStageProps) {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 })
  const preview = localize(experiment.preview, locale)

  function updatePointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      y: ((event.clientY - bounds.top) / bounds.height) * 2 - 1,
    })
  }

  const style = {
    "--experiment-accent": experiment.accent,
    "--pointer-x": pointer.x,
    "--pointer-y": pointer.y,
  } as CSSProperties

  return (
    <div
      className={
        "experiment-stage experiment-" +
        experiment.slug +
        (compact ? " is-compact" : "")
      }
      style={style}
      onPointerMove={updatePointer}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      {experiment.slug === "kinetic-type" ? (
        <div className="kinetic-type" aria-hidden="true">
          {preview.split("").map((letter, index) => (
            <span
              key={letter + "-" + index}
              style={{ "--letter-index": index } as CSSProperties}
            >
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </div>
      ) : null}

      {experiment.slug === "image-distortion" ? (
        <div className="distortion-stack" aria-hidden="true">
          <Image src="/senja.png" alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <Image className="distortion-red" src="/senja.png" alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <Image className="distortion-blue" src="/senja.png" alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <strong>{preview}</strong>
        </div>
      ) : null}

      {experiment.slug === "particle-field" ? (
        <div className="particle-grid" aria-hidden="true">
          {Array.from({ length: compact ? 48 : 80 }).map((_, index) => {
            const columns = compact ? 8 : 10
            const x = ((index % columns) / (columns - 1)) * 2 - 1
            const rows = Math.ceil((compact ? 48 : 80) / columns)
            const y = (Math.floor(index / columns) / (rows - 1)) * 2 - 1
            const distance = Math.hypot(x - pointer.x, y - pointer.y)
            const influence = Math.max(0, 1 - distance / 0.65)
            return (
              <span
                key={index}
                style={{
                  transform:
                    "scale(" +
                    (1 + influence * 2.5) +
                    ") translate(" +
                    (x - pointer.x) * influence * 8 +
                    "px, " +
                    (y - pointer.y) * influence * 8 +
                    "px)",
                  opacity: 0.25 + influence * 0.75,
                }}
              />
            )
          })}
        </div>
      ) : null}

      {experiment.slug === "spring-controls" ? (
        <div className="spring-stage">
          <div className="spring-track" aria-hidden="true" />
          <motion.div
            className="spring-knob"
            drag="x"
            dragConstraints={{ left: compact ? -70 : -140, right: compact ? 70 : 140 }}
            dragElastic={0.14}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 24 }}
            whileTap={{ scale: 0.92 }}
          >
            {preview}
          </motion.div>
        </div>
      ) : null}
    </div>
  )
}
