'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { whatsappHref } from '@/lib/site'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const skew = useTransform(scrollYProgress, [0, 1], [0, -4])

  const word = 'Kishore Textiles'.split('')

  return (
    <section ref={ref} id="top" className="relative h-[100svh] overflow-hidden">
      {/* Parallax fabric background */}
      <motion.div
        style={{ y: imageY, scale: imageScale, skewY: skew }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-fabric.png"
          alt="Luxurious flowing premium suiting fabric"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </motion.div>

      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Premium Textiles · Hyderabad
        </motion.p>

        <h1 className="max-w-4xl font-serif text-[3.4rem] font-light leading-[0.95] tracking-tight text-ivory sm:text-8xl lg:text-[8.5rem]">
          <span className="sr-only">Kishore Textiles</span>
          <span aria-hidden className="flex flex-wrap">
            {word.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 2.15 + i * 0.045,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={c === ' ' ? 'w-4 sm:w-8' : 'gold-gradient-text'}
              >
                {c === ' ' ? '\u00A0' : c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.9 }}
          className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-ivory/70 sm:text-lg"
        >
          Premium suiting &amp; shirting fabrics crafted for every occasion — where
          heritage craftsmanship meets uncompromising quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.9 }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#collections" variant="solid">
            Explore Collections
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Visit Showroom
          </MagneticButton>
          <MagneticButton
            href={whatsappHref}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Inquiry
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        >
          <ArrowDown className="h-4 w-4 text-gold" />
        </motion.span>
      </motion.div>
    </section>
  )
}
