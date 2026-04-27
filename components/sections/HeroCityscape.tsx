'use client'

import { useEffect, useRef } from 'react'

type Point = [number, number]

interface Shape {
  points: Point[]       // current positions (always 6 points)
  targets: Point[]      // lerp targets
  phase: 'building' | 'organic'
  progress: number      // 0 → 1, how close to target
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function lerpPoint(a: Point, b: Point, t: number): Point {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

// Generate a building-shaped target (rectangle silhouette, 6 points)
function buildingTarget(cx: number, baseY: number, w: number, h: number): Point[] {
  const l = cx - w / 2
  const r = cx + w / 2
  const top = baseY - h
  // 6 points: bottom-left, top-left, top-right, bottom-right, + 2 optional spire points
  const hasSpire = Math.random() > 0.5
  if (hasSpire) {
    const spireW = w * 0.15
    const spireH = h * randomBetween(0.1, 0.25)
    return [
      [l, baseY],
      [l, top],
      [cx - spireW, top],
      [cx, top - spireH],
      [cx + spireW, top],
      [r, top],
    ]
  }
  // Flat-top building — duplicate top-right as 6th point
  return [
    [l, baseY],
    [l, top],
    [cx - w * 0.1, top],
    [cx + w * 0.1, top],
    [r, top],
    [r, baseY],
  ]
}

// Generate an organic/irregular polygon target (6 points)
function organicTarget(cx: number, cy: number, r: number): Point[] {
  const points: Point[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
    const radius = r * randomBetween(0.5, 1.3)
    const jitter = randomBetween(-r * 0.2, r * 0.2)
    points.push([
      cx + Math.cos(angle) * radius + jitter,
      cy + Math.sin(angle) * radius + jitter,
    ])
  }
  return points
}

function createShapes(w: number, h: number): Shape[] {
  const shapes: Shape[] = []
  const count = 7
  const baseY = h * 0.82

  for (let i = 0; i < count; i++) {
    const cx = (w / count) * (i + 0.5) + randomBetween(-30, 30)
    const bw = randomBetween(w * 0.07, w * 0.14)
    const bh = randomBetween(h * 0.25, h * 0.65)
    const pts = buildingTarget(cx, baseY, bw, bh)
    shapes.push({
      points: pts.map(p => [...p] as Point),
      targets: pts.map(p => [...p] as Point),
      phase: 'building',
      progress: 0,
    })
  }
  return shapes
}

function nextTargets(shape: Shape, w: number, h: number, index: number, count: number): Point[] {
  const baseY = h * 0.82
  const cx = (w / count) * (index + 0.5) + randomBetween(-20, 20)

  if (shape.phase === 'building') {
    // Morph to organic
    const cy = h * randomBetween(0.3, 0.6)
    const r = randomBetween(w * 0.06, w * 0.12)
    return organicTarget(cx, cy, r)
  } else {
    // Morph back to building
    const bw = randomBetween(w * 0.07, w * 0.14)
    const bh = randomBetween(h * 0.25, h * 0.65)
    return buildingTarget(cx, baseY, bw, bh)
  }
}

function drawGlowShape(ctx: CanvasRenderingContext2D, points: Point[]) {
  if (points.length < 2) return

  // Layer 1 — broad outer glow
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.shadowBlur = 18
  ctx.shadowColor = 'rgba(255,255,255,0.6)'
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 6
  ctx.stroke()

  // Layer 2 — mid glow
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.shadowBlur = 8
  ctx.shadowColor = 'rgba(255,255,255,0.5)'
  ctx.strokeStyle = 'rgba(255,255,255,0.22)'
  ctx.lineWidth = 2
  ctx.stroke()

  // Layer 3 — crisp bright edge
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.shadowBlur = 0
  ctx.strokeStyle = 'rgba(255,255,255,0.55)'
  ctx.lineWidth = 1
  ctx.stroke()
}

const LERP_SPEED = 0.009 // controls transition pace — higher = faster morph

export default function HeroCityscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const shapesRef = useRef<Shape[]>([])
  const sizeRef = useRef({ w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      sizeRef.current = { w: canvas.width, h: canvas.height }
      shapesRef.current = createShapes(canvas.width, canvas.height)
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const draw = () => {
      const { w, h } = sizeRef.current
      const shapes = shapesRef.current
      ctx.clearRect(0, 0, w, h)

      shapes.forEach((shape, idx) => {
        // Advance lerp
        shape.progress = Math.min(1, shape.progress + LERP_SPEED)

        // Update current points toward targets
        shape.points = shape.points.map((pt, i) =>
          lerpPoint(pt, shape.targets[i], LERP_SPEED * 1.5)
        )

        // When close to target, pick next target
        const dist = shape.points.reduce((sum, pt, i) => {
          const dx = pt[0] - shape.targets[i][0]
          const dy = pt[1] - shape.targets[i][1]
          return sum + Math.sqrt(dx * dx + dy * dy)
        }, 0)

        if (dist < 4) {
          shape.phase = shape.phase === 'building' ? 'organic' : 'building'
          shape.targets = nextTargets(shape, w, h, idx, shapes.length)
          shape.progress = 0
        }

        drawGlowShape(ctx, shape.points)
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
