'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTAButton'
import HorizontalRule from '@/components/ui/HorizontalRule'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const focusAreas = [
  {
    label: 'Executive Advisory',
    href: '/executive-advisory',
    heading: 'Market architecture for founders, CEOs, and senior leaders.',
    body: 'Strategic positioning for leaders navigating growth, transition, and leadership visibility.',
  },
  {
    label: 'Company Advisory',
    href: '/company-advisory',
    heading: 'Category positioning and revenue narrative for enterprise technology firms.',
    body: 'Competitive differentiation, market category design, and analyst ecosystem positioning.',
  },
  {
    label: 'Strategic Inflection',
    href: '/strategic-inflection',
    heading: 'High-stakes advisory during leadership transitions and structural change.',
    body: 'M&A, market entry, crisis positioning, and structural repositioning at critical moments.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — deep navy background */}
      <section className="bg-accent px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full py-20">
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
              className="font-cormorant font-normal text-display text-white"
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

        <div className="max-w-6xl mx-auto w-full">
          <hr className="border-t border-white/20" />
        </div>
      </section>

      {/* Strategic Statement */}
      <section className="bg-ground px-6 lg:px-8 py-24 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-cormorant font-light text-title text-ink">
              Strategy precedes visibility.
            </h2>
            <p className="font-dm-sans font-light text-lead text-muted mt-8 leading-relaxed">
              Communications amplify positioning.
              <br />
              Positioning shapes perception.
            </p>
            <p className="font-dm-sans font-light text-body text-muted mt-6 leading-relaxed max-w-lg mx-auto">
              We work before amplification begins — clarifying how enterprise technology firms and their leaders are structurally positioned in competitive markets.
            </p>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Focus Areas */}
      <section className="bg-ground px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-rule">
            {focusAreas.map((area) => (
              <FadeInSection
                key={area.label}
                className="pt-8 lg:pt-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="bg-rule border border-rule rounded h-48 mb-6"></div>
                <p className="font-dm-sans font-normal text-small text-accent-green uppercase tracking-label">
                  {area.label}
                </p>
                <h3 className="font-cormorant font-normal text-heading text-ink mt-4">
                  {area.heading}
                </h3>
                <p className="font-dm-sans font-light text-body text-muted mt-4 leading-relaxed">
                  {area.body}
                </p>
                <Link
                  href={area.href}
                  className="inline-block font-dm-sans font-light text-small text-accent-green mt-6 hover:opacity-70 transition-opacity duration-200"
                >
                  Explore &rarr;
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Founder Statement */}
      <section className="bg-white px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <Image
                  src="/assets/team/shubhendu-nath.jpg"
                  alt="Shubhendu Nath"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-cormorant font-light text-title text-ink">
                  Founder-Led Advisory
                </h2>
                <p className="font-dm-sans font-light text-body text-muted mt-6 leading-relaxed">
                  All strategic engagements are led directly by Shubhendu Nath, drawing on two decades of enterprise technology ecosystem experience across India and Asia-Pacific.
                </p>
                <p className="font-dm-sans font-light text-body text-muted mt-4 leading-relaxed">
                  Change Agents is supported by institutional depth and execution capability where activation is required.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <HorizontalRule className="max-w-6xl mx-auto" />

      {/* Integrated Communications */}
      <section className="bg-ground px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="bg-rule border border-rule rounded h-72"></div>
              <div>
                <h2 className="font-cormorant font-light text-heading text-ink">
                  Integrated Communications
                </h2>
                <p className="font-dm-sans font-light text-body text-muted mt-6 leading-relaxed">
                  Once market architecture is defined, we support its execution through
                  media strategy, analyst engagement, and narrative activation.
                  Communication follows positioning — never precedes it.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Dark CTA */}
      <DarkCTAFooter />
    </>
  )
}
