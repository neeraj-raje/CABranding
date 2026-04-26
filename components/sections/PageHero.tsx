'use client'

import { motion, type Variants } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import CTAButton from '@/components/ui/CTAButton'
import HorizontalRule from '@/components/ui/HorizontalRule'

interface PageHeroProps {
  label?: string
  heading: string
  lead: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  fullHeight?: boolean
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function PageHero({
  label,
  heading,
  lead,
  showCTA = false,
  ctaText = 'Start a Conversation',
  ctaHref = '/contact',
  fullHeight = false,
}: PageHeroProps) {
  return (
    <section
      className={`bg-ground px-6 lg:px-8 ${
        fullHeight ? 'min-h-[80vh] flex flex-col justify-center' : 'py-24 lg:py-32'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {label && (
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <SectionLabel className="mb-6">{label}</SectionLabel>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-cormorant font-light text-display text-ink"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-dm-sans font-light text-lead text-ink mt-8 max-w-lg leading-relaxed"
          >
            {lead}
          </motion.p>

          {showCTA && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-10"
            >
              <CTAButton href={ctaHref}>{ctaText} &rarr;</CTAButton>
            </motion.div>
          )}
        </motion.div>
      </div>

      <HorizontalRule className="mt-16 max-w-6xl mx-auto" />
    </section>
  )
}
