'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { site, whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Fabrics', href: '#fabrics' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass py-3' : 'bg-transparent py-6',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-medium tracking-wide text-ivory sm:text-2xl">
            Kishore <span className="text-gold">Textiles</span>
          </span>
          <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
            Royal Attire
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-xs uppercase tracking-[0.2em] text-ivory/75 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-[#0f0f0f] sm:inline-flex"
          >
            Enquire
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-ivory lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-serif text-xl text-ivory">
                Kishore <span className="text-gold">Textiles</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-ivory"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-serif text-3xl text-ivory transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-10">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 text-gold"
              >
                <Phone className="h-4 w-4" />
                <span className="tracking-widest">{site.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
