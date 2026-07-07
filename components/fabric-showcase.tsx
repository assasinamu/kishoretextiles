'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Fabric = {
  name: string
  image: string
  weave: string
  gsm: string
  softness: number
  breathability: number
  sheen: number
  note: string
}

const fabrics: Fabric[] = [
  {
    name: 'Worsted Suiting',
    image: '/images/collection-suiting.png',
    weave: 'Twill Weave',
    gsm: '260 GSM',
    softness: 78,
    breathability: 65,
    sheen: 70,
    note: 'A structured drape with a refined matte finish — tailoring at its finest.',
  },
  {
    name: 'Egyptian Shirting',
    image: '/images/collection-shirting.png',
    weave: 'Poplin Weave',
    gsm: '120 GSM',
    softness: 92,
    breathability: 88,
    sheen: 60,
    note: 'Crisp, cool and impossibly smooth against the skin.',
  },
  {
    name: 'Raw Indigo Denim',
    image: '/images/collection-denim.png',
    weave: 'Diagonal Twill',
    gsm: '340 GSM',
    softness: 55,
    breathability: 50,
    sheen: 30,
    note: 'Rugged, characterful and built to age beautifully over time.',
  },
  {
    name: 'European Linen',
    image: '/images/collection-linen.png',
    weave: 'Plain Slub',
    gsm: '180 GSM',
    softness: 74,
    breathability: 96,
    sheen: 40,
    note: 'Naturally textured and effortlessly breathable for warm days.',
  },
]

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em]">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-gold">{value}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function FabricShowcase() {
  const [active, setActive] = useState(0)
  const fabric = fabrics[active]

  return (
    <section id="fabrics" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Interactive Showcase"
          title="Feel the fabric before you visit"
          align="left"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Fabric list */}
          <div className="flex flex-col">
            {fabrics.map((f, i) => (
              <button
                key={f.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative border-b border-border py-6 text-left transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    className={`font-serif text-3xl font-light transition-colors duration-300 sm:text-4xl ${
                      active === i ? 'text-gold' : 'text-ivory/50 group-hover:text-ivory'
                    }`}
                  >
                    {f.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {f.gsm}
                  </span>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gold"
                  initial={false}
                  animate={{ width: active === i ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            ))}
          </div>

          {/* Preview */}
          <Reveal>
            <div className="glass overflow-hidden rounded-lg">
              <div className="relative aspect-16/10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fabric.image}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={fabric.image || '/placeholder.svg'}
                      alt={`${fabric.name} texture close-up`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    {fabric.weave}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={fabric.note}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="text-pretty leading-relaxed text-ivory/80"
                  >
                    {fabric.note}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-7 grid gap-5 sm:grid-cols-3">
                  <Meter key={`s-${active}`} label="Softness" value={fabric.softness} />
                  <Meter key={`b-${active}`} label="Breathability" value={fabric.breathability} />
                  <Meter key={`sh-${active}`} label="Sheen" value={fabric.sheen} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
