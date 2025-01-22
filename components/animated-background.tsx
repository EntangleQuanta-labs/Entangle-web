import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface Star {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const stars: Star[] = []
    const numStars = 100
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw stars
      stars.forEach((star) => {
        star.x += star.vx
        star.y += star.vy

        // Wrap around screen
        if (star.x < 0) star.x = window.innerWidth
        if (star.x > window.innerWidth) star.x = 0
        if (star.y < 0) star.y = window.innerHeight
        if (star.y > window.innerHeight) star.y = 0

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.3)"
        ctx.fill()

        // Draw connection lines
        stars.forEach((otherStar) => {
          const distance = Math.sqrt(Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2))
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(otherStar.x, otherStar.y)
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(255, 255, 255, ${1 - distance / 150})`
                : `rgba(0, 0, 0, ${(1 - distance / 150) * 0.2})`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />
}

