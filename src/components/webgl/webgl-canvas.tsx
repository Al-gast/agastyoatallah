"use client"

import { PerformanceMonitor } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

type WebGLCanvasProps = {
  scene: string
  accent: string
  onFailure: () => void
}

const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying float vWave;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 transformed = position;
    float wave = sin(position.x * 1.7 + uTime * 0.75) * 0.18;
    wave += cos(position.y * 2.4 - uTime * 0.55) * 0.12;
    float pointerWave = sin((position.x + uPointer.x) * 2.2) * uPointer.y * 0.08;
    transformed.z += wave + pointerWave;
    vWave = transformed.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`

const fragmentShader = `
  uniform vec3 uAccent;
  uniform float uOpacity;
  varying float vWave;
  varying vec2 vUv;

  void main() {
    float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(0.0, 0.18, 1.0 - vUv.x);
    edge *= smoothstep(0.0, 0.16, vUv.y) * smoothstep(0.0, 0.16, 1.0 - vUv.y);
    float stripe = 0.55 + 0.45 * sin((vUv.x + vUv.y) * 20.0 + vWave * 9.0);
    vec3 color = uAccent * (0.65 + stripe * 0.5) + vec3(0.12, 0.18, 0.34) * (1.0 - stripe);
    gl_FragColor = vec4(color, edge * uOpacity * (0.7 + abs(vWave)));
  }
`

function Ribbon({ scene, accent }: { scene: string; accent: string }) {
  const mesh = useRef<THREE.Mesh>(null)
  const material = useRef<THREE.ShaderMaterial>(null)
  const targetColor = useMemo(() => new THREE.Color(accent), [accent])
  const sceneOffset = scene === "work" ? -0.65 : scene === "lab" ? 0.5 : 0

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2() },
      uAccent: { value: new THREE.Color("#4f7cff") },
      uOpacity: { value: 0.32 },
    }),
    [],
  )

  useFrame((state, delta) => {
    if (!mesh.current || !material.current) return
    material.current.uniforms.uTime.value += delta
    material.current.uniforms.uPointer.value.lerp(state.pointer, 0.06)
    material.current.uniforms.uAccent.value.lerp(targetColor, 0.04)
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      -0.22 + state.pointer.y * 0.08,
      0.04,
    )
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      sceneOffset + state.pointer.x * 0.12,
      0.035,
    )
  })

  return (
    <mesh ref={mesh} position={[1.35, -0.15, -0.5]} rotation={[-0.22, 0, -0.18]}>
      <planeGeometry args={[6.4, 3.5, 72, 48]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function Particles({ accent }: { accent: string }) {
  const points = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const array = new Float32Array(900 * 3)
    for (let index = 0; index < 900; index += 1) {
      const stride = index * 3
      const pseudoRandom = (seed: number) => {
        const value = Math.sin(seed * 12.9898) * 43758.5453
        return value - Math.floor(value)
      }
      array[stride] = (pseudoRandom(index + 1) - 0.5) * 12
      array[stride + 1] = (pseudoRandom(index + 2001) - 0.5) * 7
      array[stride + 2] = (pseudoRandom(index + 4001) - 0.5) * 4 - 1
    }
    return array
  }, [])

  useFrame((state, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.012
    points.current.rotation.x = state.pointer.y * 0.025
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={accent}
        size={0.018}
        transparent
        opacity={0.34}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene({ scene, accent }: { scene: string; accent: string }) {
  return (
    <>
      <Particles accent={accent} />
      <Ribbon scene={scene} accent={accent} />
    </>
  )
}

export function WebGLCanvas({ scene, accent, onFailure }: WebGLCanvasProps) {
  const [dpr, setDpr] = useState(1.25)

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setDpr(0.75)
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 5], fov: 44 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
        gl.domElement.addEventListener("webglcontextlost", onFailure, { once: true })
      }}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(1.5)}
        onDecline={() => setDpr(0.9)}
        onFallback={() => setDpr(0.75)}
      >
        <Scene scene={scene} accent={accent} />
      </PerformanceMonitor>
    </Canvas>
  )
}
