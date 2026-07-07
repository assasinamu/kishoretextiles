'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            className="mb-4 text-xs uppercase tracking-[0.5em] text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Royal Attire
          </motion.p>
          <motion.h1
            className="font-serif text-4xl font-light tracking-wide text-ivory sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Kishore Textiles
          </motion.h1>
          <div className="mt-8 h-px w-52 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-gold"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
