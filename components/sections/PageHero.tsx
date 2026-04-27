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
  bgImage?: string
  boldSans?: boolean
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
  bgImage,
  boldSans = false,
}: PageHeroProps) {
  const bgStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/CABranding${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      className={`${bgImage ? '' : 'bg-ground'} px-6 lg:px-8 ${
        fullHeight ? 'min-h-[80vh] flex flex-col justify-center' : 'py-24 lg:py-32'
      }`}
      style={bgStyle}
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
            className={`${boldSans ? 'font-dm-sans font-bold text-5xl lg:text-6xl' : 'font-cormorant font-light text-display'} ${bgImage ? 'font-bold text-white' : 'text-ink'}`}
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`font-dm-sans ${boldSans || bgImage ? 'font-normal' : 'font-light'} ${boldSans ? 'text-lg' : 'text-lead'} ${bgImage ? 'text-white/90' : 'text-ink'} mt-8 max-w-lg leading-relaxed`}
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
