'use client'

import {
  Gem,
  Tag,
  Store,
  MessagesSquare,
  Layers,
  ShieldCheck,
  HeartHandshake,
  Clock,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const features = [
  { icon: Gem, title: 'Premium Fabric Quality', desc: 'Only the finest weaves make it to our shelves.' },
  { icon: Tag, title: 'Wholesale Pricing', desc: 'Competitive bulk rates for tailors & businesses.' },
  { icon: Store, title: 'Retail Available', desc: 'Walk-in customers welcomed with the same care.' },
  { icon: MessagesSquare, title: 'Expert Guidance', desc: 'Honest advice to help you choose the right cloth.' },
  { icon: Layers, title: 'Massive Collection', desc: 'An expansive range across every fabric family.' },
  { icon: ShieldCheck, title: 'Trusted by Hundreds', desc: 'A reputation built over years of service.' },
  { icon: HeartHandshake, title: 'Friendly Staff', desc: 'A warm, patient team at your service.' },
  { icon: Clock, title: 'Years of Experience', desc: 'Deep expertise in fabric sourcing & quality.' },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="The Kishore difference" />

        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-full bg-card p-8 transition-colors duration-500 hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light text-ivory">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
