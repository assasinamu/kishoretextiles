import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <Reveal>
        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
          {align === 'center' && <span className="h-px w-8 bg-gold/50" />}
          {eyebrow}
          <span className="h-px w-8 bg-gold/50" />
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
