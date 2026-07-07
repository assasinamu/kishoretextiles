'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Do you sell both wholesale and retail?',
    a: 'Yes. We proudly serve wholesale partners such as tailors and businesses with competitive bulk pricing, while retail walk-in customers are always warmly welcomed with the same premium service.',
  },
  {
    q: 'What types of fabrics do you offer?',
    a: 'Our collection spans premium shirting, suiting, denim, cotton, linen, formal wear, fashion fabrics and corporate uniform cloth — carefully curated for quality and drape.',
  },
  {
    q: 'Where is your showroom located?',
    a: 'We are located at Shop No. 2-4, 550/1, Mahatma Gandhi Road, Nallagutta, Ramgopalpet, Secunderabad, Hyderabad, Telangana 500003. Easy to reach and a delight to visit.',
  },
  {
    q: 'Can I get guidance on choosing the right fabric?',
    a: 'Absolutely. Our experienced and friendly staff offer genuine, honest advice to help you select the perfect fabric for your occasion, budget and style.',
  },
  {
    q: 'How can I enquire about pricing or availability?',
    a: 'The quickest way is via WhatsApp using the button on this page, or you can call us directly. We are happy to share details and help you plan your visit.',
  },
]

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={index * 0.06}>
      <div className="border-b border-border">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-7 text-left"
          aria-expanded={open}
        >
          <span className="font-serif text-xl font-light text-ivory sm:text-2xl">
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-gold"
          >
            <Plus className="h-6 w-6" strokeWidth={1.25} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-7 leading-relaxed text-muted-foreground">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Everything you need to know" />
        <div className="mt-14">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
