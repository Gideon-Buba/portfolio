import { useEffect, useRef } from "react"

interface StaticStar {
  x: number
  y: number
  radius: number
  baseOpacity: number
  phase: number
  speed: number
}

interface Meteor {
  x: number
  y: number
  vx: number
  vy: number
  length: number
  opacity: number
  decay: number
  width: number
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function spawnMeteor(width: number, height: number): Meteor {
  const angle = rand(20, 45) * (Math.PI / 180)
  const speed = rand(12, 22)
  // Start from top edge or left edge
  const fromTop = Math.random() > 0.3
  return {
    x: fromTop ? rand(0, width) : rand(-200, 0),
    y: fromTop ? rand(-100, height * 0.4) : rand(0, height * 0.5),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    length: rand(100, 220),
    opacity: rand(0.7, 1),
    decay: rand(0.006, 0.014),
    width: rand(1, 2.5),
  }
}

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    /* ── Static star field ───────────────────────────── */
    let stars: StaticStar[] = []

    function buildStars() {
      const count = Math.floor((w * h) / 6000)
      stars = Array.from({ length: count }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        radius: rand(0.3, 1.6),
        baseOpacity: rand(0.2, 0.9),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.005, 0.025),
      }))
    }

    buildStars()

    /* ── Meteors ─────────────────────────────────────── */
    const meteors: Meteor[] = []
    let frame = 0
    const SPAWN_INTERVAL = 150

    /* ── Resize ──────────────────────────────────────── */
    function onResize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
      buildStars()
    }
    window.addEventListener("resize", onResize)

    /* ── Draw loop ───────────────────────────────────── */
    function tick() {
      const isDark = document.documentElement.classList.contains("dark")
      ctx.clearRect(0, 0, w, h)

      // Star colour — white in dark, dark indigo in light
      const [sr, sg, sb, starAlphaScale] = isDark
        ? [255, 255, 255, 1]
        : [50, 50, 120, 0.55]

      // Draw stars
      for (const s of stars) {
        s.phase += s.speed
        const twinkle = Math.sin(s.phase) * 0.35 + 0.65
        const alpha = s.baseOpacity * twinkle * starAlphaScale
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${sr},${sg},${sb},${alpha})`
        ctx.fill()
      }

      // Spawn meteors
      frame++
      if (frame % SPAWN_INTERVAL === 0) {
        meteors.push(spawnMeteor(w, h))
      }

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += m.vx
        m.y += m.vy
        m.opacity -= m.decay

        if (m.opacity <= 0 || m.x > w + 300 || m.y > h + 300) {
          meteors.splice(i, 1)
          continue
        }

        const tailX = m.x - m.vx / m.width * m.length * 0.12 * m.width
        const tailY = m.y - m.vy / m.width * m.length * 0.12 * m.width

        // Actual tail using angle
        const angle = Math.atan2(m.vy, m.vx)
        const tx = m.x - Math.cos(angle) * m.length
        const ty = m.y - Math.sin(angle) * m.length

        // Tail + head colours adapt to theme
        const headRgb = isDark ? "255,255,255" : "80,100,20"
        const tailRgb = "211,233,122"

        const grad = ctx.createLinearGradient(tx, ty, m.x, m.y)
        grad.addColorStop(0, `rgba(${tailRgb},0)`)
        grad.addColorStop(0.5, `rgba(${tailRgb},${m.opacity * 0.4})`)
        grad.addColorStop(1, `rgba(${headRgb},${m.opacity})`)

        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = m.width
        ctx.lineCap = "round"
        ctx.stroke()

        // Head glow
        const glow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 5)
        glow.addColorStop(0, `rgba(${headRgb},${m.opacity})`)
        glow.addColorStop(1, `rgba(${headRgb},0)`)
        ctx.beginPath()
        ctx.arc(m.x, m.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
