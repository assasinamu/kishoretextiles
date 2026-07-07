'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { site, whatsappHref } from '@/lib/site'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { MagneticButton } from './magnetic-button'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Visit Us" title="Step into the showroom" />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Address
                  </h3>
                  <address className="mt-2 not-italic leading-relaxed text-ivory/85">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                    <br />
                    {site.address.line4}
                  </address>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Phone
                  </h3>
                  <a
                    href={`tel:${site.phone}`}
                    className="mt-2 block text-lg text-ivory/85 transition-colors hover:text-gold"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Business Hours
                  </h3>
                  <ul className="mt-2 space-y-1 text-ivory/85">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex flex-wrap gap-x-3">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2">
                <MagneticButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  ariaLabel="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.15}>
            <div className="relative h-[360px] overflow-hidden rounded-lg ring-1 ring-inset ring-gold/20 lg:h-full">
              <iframe
                title="Kishore Textiles location map"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.3] contrast-110"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
