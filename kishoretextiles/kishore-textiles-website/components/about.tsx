'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './reveal'

const points = [
  'Built on years of genuine customer trust',
  'Wholesale expertise for tailors & businesses',
  'Retail customers always warmly welcome',
  'High-quality fabrics at affordable pricing',
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold/50" />
              Our Story
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl">
              A legacy woven into
              <span className="gold-gradient-text"> every thread</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              For years, Kishore Textiles has been the trusted destination in
              Secunderabad for connoisseurs of fine cloth. What began as a humble
              storefront on Mahatma Gandhi Road has grown into a celebrated house
              of premium suiting and shirting — serving both wholesale partners and
              discerning retail customers with equal devotion.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              We believe luxury should be accessible. Every metre we sell is chosen
              for its craftsmanship, drape and character — offered at prices that
              honour the trust our community places in us.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.15 * i}>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  <span className="text-sm leading-relaxed text-ivory/85">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div ref={ref} className="order-1 lg:order-2">
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden rounded-lg">
              <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                  src="/images/about-showroom.png"
                  alt="Kishore Textiles luxury showroom interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass mt-[-4rem] ml-auto w-fit max-w-[15rem] rounded-lg p-6 lg:mr-8">
              <p className="font-serif text-5xl font-light text-gold">Est.</p>
              <p className="mt-1 text-sm leading-relaxed text-ivory/80">
                Years of trusted service to Hyderabad&apos;s finest tailors &amp;
                families.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
