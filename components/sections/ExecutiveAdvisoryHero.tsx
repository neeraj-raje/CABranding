'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import SectionLabel from '@/components/ui/SectionLabel'
import HorizontalRule from '@/components/ui/HorizontalRule'

interface ExecutiveAdvisoryHeroProps {
  label?: string
  heading: string
  lead: string
  bgImage: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ExecutiveAdvisoryHero({
  label,
  heading,
  lead,
  bgImage,
}: ExecutiveAdvisoryHeroProps) {
  return (
    <section
      className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden min-h-[70vh] flex flex-col justify-center"
      style={{
        backgroundImage: `url('/CABranding${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Aurora overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-20 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)] [--white-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-screen after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:pointer-events-none after:opacity-20`,
            `after:animate-aurora`,
          )}
          style={
            {
              '--blue-300': '#93c5fd',
              '--blue-400': '#60a5fa',
              '--blue-500': '#3b82f6',
              '--indigo-300': '#a5b4fc',
              '--violet-200': '#ddd6fe',
            } as React.CSSProperties
          }
        ></div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {label && (
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <SectionLabel className="mb-6 text-white/80">{label}</SectionLabel>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-cormorant font-light text-display text-white"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-dm-sans font-light text-lead text-white/90 mt-8 max-w-lg leading-relaxed"
          >
            {lead}
          </motion.p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-16">
        <HorizontalRule />
      </div>
    </section>
  )
}
