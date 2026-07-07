'use client'

import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const images = [
  { src: '/images/gallery-1.png', alt: 'Folded premium fabric swatches', span: 'row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Tailor measuring suiting fabric', span: '' },
  { src: '/images/about-showroom.png', alt: 'Kishore Textiles showroom interior', span: '' },
  { src: '/images/gallery-3.png', alt: 'Rolls of luxury fabric bolts', span: 'row-span-2' },
  { src: '/images/gallery-4.png', alt: 'Golden thread woven detail', span: '' },
  { src: '/images/collection-linen.png', alt: 'Premium linen fabric close up', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The Showroom" title="A glimpse inside our world" />

        <StaggerGroup className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
          {images.map((img, i) => (
            <StaggerItem key={i} className={img.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-gold/40" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
