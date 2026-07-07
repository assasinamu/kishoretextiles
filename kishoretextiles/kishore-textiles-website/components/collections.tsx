'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { collections, whatsappHref } from '@/lib/site'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

export function Collections() {
  return (
    <section id="collections" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Curated Collections"
          title="Fabrics for every occasion"
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <StaggerItem key={c.title}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-4/5 overflow-hidden rounded-lg"
              >
                <Image
                  src={c.image || '/placeholder.svg'}
                  alt={`${c.title} fabric collection`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="glass absolute inset-x-4 bottom-4 rounded-md p-5">
                    <p className="text-sm leading-relaxed text-ivory/85">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                      Enquire now <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:opacity-0">
                  <h3 className="font-serif text-3xl font-light text-ivory">
                    {c.title}
                  </h3>
                  <span className="text-gold">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-gold/40" />
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
