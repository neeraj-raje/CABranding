'use client'

import { useEffect, useRef } from 'react'

interface Building {
  x: number
  width: number
  height: number
  targetHeight: number
  floors: number
  hasSpire: boolean
  driftX: number
  targetDriftX: number
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function createBuildings(canvasWidth: number, canvasHeight: number): Building[] {
  const count = 13
  const buildings: Building[] = []
  const segmentWidth = canvasWidth / count

  for (let i = 0; i < count; i++) {
    const minH = canvasHeight * 0.15
    const maxH = canvasHeight * 0.75
    const h = randomBetween(minH, maxH)
    const w = randomBetween(segmentWidth * 0.4, segmentWidth * 0.85)
    const x = i * segmentWidth + (segmentWidth - w) / 2

    buildings.push({
      x,
      width: w,
      height: h,
      targetHeight: randomBetween(minH, maxH),
      floors: Math.floor(randomBetween(2, 8)),
      hasSpire: Math.random() > 0.65,
      driftX: 0,
      targetDriftX: randomBetween(-12, 12),
    })
  }
  return buildings
}

export default function HeroCityscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const buildingsRef = useRef<Building[]>([])

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
      buildingsRef.current = createBuildings(canvas.width, canvas.height)
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const buildings = buildingsRef.current

      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.11)'
      ctx.lineWidth = 1

      const baseY = h * 0.88

      // Horizon line
      ctx.beginPath()
      ctx.moveTo(0, baseY)
      ctx.lineTo(w, baseY)
      ctx.stroke()

      for (const b of buildings) {
        // Lerp height and drift toward targets
        b.height = lerp(b.height, b.targetHeight, 0.004)
        b.driftX = lerp(b.driftX, b.targetDriftX, 0.003)

        // Assign new targets when close enough
        const minH = h * 0.15
        const maxH = h * 0.75
        if (Math.abs(b.height - b.targetHeight) < 1.5) {
          b.targetHeight = randomBetween(minH, maxH)
          b.floors = Math.floor(randomBetween(2, 8))
        }
        if (Math.abs(b.driftX - b.targetDriftX) < 0.5) {
          b.targetDriftX = randomBetween(-12, 12)
        }

        const bx = b.x + b.driftX
        const by = baseY - b.height
        const bw = b.width
        const bh = b.height

        // Building outline
        ctx.beginPath()
        ctx.rect(bx, by, bw, bh)
        ctx.stroke()

        // Floor lines
        if (b.floors > 0) {
          const floorH = bh / (b.floors + 1)
          for (let f = 1; f <= b.floors; f++) {
            const fy = by + f * floorH
            ctx.beginPath()
            ctx.moveTo(bx + 2, fy)
            ctx.lineTo(bx + bw - 2, fy)
            ctx.stroke()
          }
        }

        // Spire
        if (b.hasSpire) {
          const spireH = randomBetween(20, 50)
          ctx.beginPath()
          ctx.moveTo(bx + bw / 2, by)
          ctx.lineTo(bx + bw / 2, by - spireH)
          ctx.stroke()
        }
      }

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
