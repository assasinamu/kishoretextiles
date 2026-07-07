'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { Star } from 'lucide-react'
import { Reveal } from './reveal'

function Counter({
  to,
  suffix = '',
  decimals = 0,
}: {
  to: number
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 223, suffix: '+', label: 'Google Reviews', decimals: 0 },
  { value: 4.9, suffix: '★', label: 'Customer Rating', decimals: 1 },
  { value: 100, suffix: '%', label: 'Trusted by Thousands', decimals: 0 },
]

export function TrustCounters() {
  return (
    <section id="trust" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col items-center text-center">
          <Reveal>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl font-light text-ivory sm:text-5xl">
              Trusted by generations of Hyderabad
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.12 * i}>
              <div className="glass flex flex-col items-center rounded-lg px-6 py-12 text-center transition-transform duration-500 hover:-translate-y-2">
                <p className="font-serif text-6xl font-light gold-gradient-text sm:text-7xl">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
