'use client'

import { motion, type Variants } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import HorizontalRule from '@/components/ui/HorizontalRule'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AuroraHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-ink px-6 lg:px-8">
      {/* Aurora Background SVG */}
      <div className="absolute inset-0 opacity-80">
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="auroraGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background gradient */}
          <rect width="1200" height="800" fill="#1a1a1a" />
          <rect width="1200" height="800" fill="url(#auroraGlow)" />

          {/* Perspective grid lines */}
          <g strokeWidth="1.5" stroke="#0ea5e9" opacity="0.4">
            {/* Horizontal lines */}
            <line x1="0" y1="200" x2="1200" y2="200" />
            <line x1="0" y1="300" x2="1200" y2="300" />
            <line x1="0" y1="400" x2="1200" y2="400" />
            <line x1="0" y1="500" x2="1200" y2="500" />
            <line x1="0" y1="600" x2="1200" y2="600" />

            {/* Vertical lines - perspective */}
            <line x1="150" y1="0" x2="100" y2="800" />
            <line x1="300" y1="0" x2="300" y2="800" />
            <line x1="450" y1="0" x2="500" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="750" y1="0" x2="700" y2="800" />
            <line x1="900" y1="0" x2="900" y2="800" />
            <line x1="1050" y1="0" x2="1100" y2="800" />
          </g>

          {/* Aurora light points */}
          <g filter="url(#glow)">
            {/* Left side lights */}
            <circle cx="150" cy="250" r="8" fill="#06b6d4" className="aurora-light" style={{ '--delay': '0s' } as React.CSSProperties} />
            <circle cx="200" cy="200" r="6" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '0.5s' } as React.CSSProperties} />
            <circle cx="100" cy="350" r="7" fill="#06b6d4" className="aurora-light" style={{ '--delay': '1s' } as React.CSSProperties} />

            {/* Center lights */}
            <circle cx="400" cy="300" r="9" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '0.2s' } as React.CSSProperties} />
            <circle cx="600" cy="250" r="8" fill="#06b6d4" className="aurora-light" style={{ '--delay': '0.7s' } as React.CSSProperties} />
            <circle cx="500" cy="400" r="7" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '1.2s' } as React.CSSProperties} />

            {/* Right side lights */}
            <circle cx="850" cy="280" r="8" fill="#06b6d4" className="aurora-light" style={{ '--delay': '0.3s' } as React.CSSProperties} />
            <circle cx="950" cy="350" r="6" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '0.8s' } as React.CSSProperties} />
            <circle cx="1000" cy="200" r="7" fill="#06b6d4" className="aurora-light" style={{ '--delay': '1.4s' } as React.CSSProperties} />

            {/* Additional scattered lights */}
            <circle cx="300" cy="150" r="5" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '0.4s' } as React.CSSProperties} />
            <circle cx="700" cy="180" r="6" fill="#06b6d4" className="aurora-light" style={{ '--delay': '0.9s' } as React.CSSProperties} />
            <circle cx="550" cy="500" r="5" fill="#0ea5e9" className="aurora-light" style={{ '--delay': '1.3s' } as React.CSSProperties} />
          </g>

          {/* Neon lines overlay */}
          <g strokeWidth="2" stroke="#06b6d4" opacity="0.3" fill="none">
            <path d="M 0 350 Q 300 300, 600 320 T 1200 350" />
            <path d="M 0 450 Q 300 400, 600 420 T 1200 450" />
          </g>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto w-full py-20">
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
            <CTAButton href="/contact" variant="outline-inverted">
              Start a Conversation
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <hr className="border-t border-white/20" />
      </div>

      <style jsx>{`
        @keyframes aurora-shimmer {
          0%, 100% {
            opacity: 0.3;
            filter: drop-shadow(0 0 4px #06b6d4);
          }
          50% {
            opacity: 0.8;
            filter: drop-shadow(0 0 12px #0ea5e9);
          }
        }

        :global(.aurora-light) {
          animation: aurora-shimmer 3s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.aurora-light) {
            animation: none;
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}
