'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import CTAButton from '@/components/ui/CTAButton'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AuroraHero() {
  return (
    <main>
      <div
        className={cn(
          'relative flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white',
        )}
        style={
          {
            '--aurora':
              'repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)',
            '--dark-gradient':
              'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',
            '--white-gradient':
              'repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)',
            '--blue-300': '#93c5fd',
            '--blue-400': '#60a5fa',
            '--blue-500': '#3b82f6',
            '--indigo-300': '#a5b4fc',
            '--violet-200': '#ddd6fe',
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)] [--white-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:pointer-events-none`,
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)] after:animate-aurora`,
            )}
          ></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">
          <motion.div
            className="mx-auto text-center max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <p className="font-dm-sans font-light text-micro text-white/60 uppercase tracking-label mb-6">
                Strategic Advisory &nbsp;·&nbsp; Enterprise Technology
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-cormorant font-light text-display text-white"
            >
              Shaping Enterprise
              <br />
              Market Architecture
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-dm-sans font-light text-lead text-white/80 mt-8 max-w-xl mx-auto leading-relaxed"
            >
              We advise enterprise technology companies and senior leaders on strategic positioning and competitive architecture — at moments of growth, transition, and scale.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <CTAButton href="#footer-form" variant="aurora-dark">
                Start a Conversation →
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-8">
          <hr className="border-t border-white/20" />
        </div>
      </div>
    </main>
  )
}
