import { site, whatsappHref } from '@/lib/site'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Fabrics', href: '#fabrics' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl font-light text-ivory">
              Kishore <span className="text-gold">Textiles</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Royal Attire
            </p>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {site.tagline}. Premium suiting &amp; shirting fabrics — wholesale and
              retail — in the heart of Secunderabad, Hyderabad.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Reach Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>{site.address.line1}</li>
              <li>
                {site.address.line2}, {site.address.line3}
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="transition-colors hover:text-gold"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kishore Textiles — Royal Attire. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">Crafted with care in Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}
