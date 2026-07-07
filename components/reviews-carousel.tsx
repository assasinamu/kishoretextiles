'use client'

import { Star, Quote } from 'lucide-react'
import { reviews } from '@/lib/site'
import { SectionHeading } from './section-heading'

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <figure className="glass flex w-[85vw] shrink-0 flex-col rounded-lg p-7 sm:w-[380px]">
      <Quote className="h-7 w-7 text-gold/40" />
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-ivory/85">
        {text}
      </blockquote>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <figcaption className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-serif text-lg text-gold">
            {name.charAt(0)}
          </span>
          <span className="text-sm text-ivory">{name}</span>
        </figcaption>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </figure>
  )
}

export function ReviewsCarousel() {
  const doubled = [...reviews, ...reviews]
  return (
    <section id="reviews" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customer Voices"
          title="Words from those who trust us"
        />
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />
        <div className="flex w-max animate-scroll-x gap-5 px-5">
          {doubled.map((r, i) => (
            <ReviewCard key={i} name={r.name} text={r.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
