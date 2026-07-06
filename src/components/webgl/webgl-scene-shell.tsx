"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const WebGLCanvas = dynamic(
  () => import("@/components/webgl/webgl-canvas").then((module) => module.WebGLCanvas),
  { ssr: false },
)

type NetworkNavigator = Navigator & {
  connection?: { saveData?: boolean }
}

type SceneState = {
  name: string
  accent: string
}

const defaultScene: SceneState = { name: "hero", accent: "#4f7cff" }

export function WebGLSceneShell() {
  const pathname = usePathname()
  const [enabled, setEnabled] = useState(false)
  const [failed, setFailed] = useState(false)
  const [scene, setScene] = useState<SceneState>(defaultScene)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const saveData = (navigator as NetworkNavigator).connection?.saveData === true
    const canvas = document.createElement("canvas")
    const supportsWebGL = Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    )
    const frameId = window.requestAnimationFrame(() => {
      setEnabled(!reducedMotion && !saveData && supportsWebGL)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]"),
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!(current?.target instanceof HTMLElement)) return
        setScene({
          name: current.target.dataset.scene ?? "hero",
          accent: current.target.dataset.accent ?? defaultScene.accent,
        })
      },
      { rootMargin: "-15% 0px -30%", threshold: [0, 0.2, 0.5] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="webgl-shell" aria-hidden="true">
      {enabled && !failed ? (
        <WebGLCanvas
          scene={scene.name}
          accent={scene.accent}
          onFailure={() => setFailed(true)}
        />
      ) : (
        <div className="webgl-poster" />
      )}
      <div className="webgl-vignette" />
    </div>
  )
}
