'use client'

import { useEffect, useState } from 'react'

const ARTICLE_ID = 'blog-article'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      const article = document.getElementById(ARTICLE_ID)
      if (!article) return

      const articleTop = article.offsetTop
      const readableDistance = Math.max(article.offsetHeight - window.innerHeight, 1)
      const amountRead = window.scrollY - articleTop
      const nextProgress = Math.min(100, Math.max(0, (amountRead / readableDistance) * 100))

      setProgress(nextProgress)
    }

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateProgress)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="pointer-events-none fixed inset-x-0 top-15 z-40 h-1 bg-foreground/5"
    >
      <div
        className="relative h-full origin-left bg-gradient-to-r from-emerald-500 via-primary to-green-300 shadow-[0_0_10px_var(--primary)] will-change-transform"
        style={{ transform: `scaleX(${progress / 100})` }}
      >
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary opacity-80 shadow-[0_0_8px_var(--primary)]" />
      </div>
    </div>
  )
}
