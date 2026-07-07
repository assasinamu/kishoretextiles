'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

type MagneticProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className,
  target,
  rel,
  ariaLabel,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-500 cursor-pointer'

  const variants = {
    solid: 'bg-gold text-[#0f0f0f] hover:bg-[#d8b862]',
    outline:
      'border border-gold/40 text-ivory hover:border-gold hover:text-gold',
    ghost: 'text-ivory/80 hover:text-gold',
  }

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={cn(base, variants[variant], className)}
        >
          {inner}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn(base, variants[variant], className)}
        >
          {inner}
        </button>
      )}
    </motion.div>
  )
}
