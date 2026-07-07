'use client'

const items = [
  'Suiting',
  'Shirting',
  'Denim',
  'Cotton',
  'Linen',
  'Formal Wear',
  'Fashion Fabrics',
  'Corporate Uniforms',
]

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-card py-6">
      <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-serif text-2xl font-light tracking-wide text-ivory/50 sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12" aria-hidden>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-serif text-2xl font-light tracking-wide text-ivory/50 sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
