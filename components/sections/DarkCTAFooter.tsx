'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-accent px-6 lg:px-8 py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        <p className="font-dm-sans font-light text-micro text-white/60 uppercase tracking-label mb-4">
          Limited Engagements
        </p>

        <h2 className="font-cormorant font-light text-title text-white max-w-lg">
          We work with a small number of enterprise leaders each year.
        </h2>

        <p className="font-dm-sans font-light text-lead text-white/75 mt-6 max-w-md">
          Engagement begins with a confidential exploratory discussion.
        </p>

        <div className="mt-10">
          <CTAButton href="/contact" variant="outline-inverted">
            Start a Conversation
          </CTAButton>
        </div>
      </motion.div>
    </section>
  )
}
