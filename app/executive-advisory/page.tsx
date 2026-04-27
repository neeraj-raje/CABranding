import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import EmDashList from '@/components/ui/EmDashList'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Executive Advisory — Change Agents',
  description:
    'Strategic positioning and market architecture for founders, CEOs, and senior leaders.',
}

export default function ExecutiveAdvisoryPage() {
  return (
    <>
      <PageHero
        label="Executive Market Architecture"
        heading={`Positioning for Leaders\nWho Shape Markets`}
        lead="We work with founders, CEOs, and senior leaders to clarify how they are positioned within their industry — and how that positioning translates into influence, opportunity, and long-term relevance."
        bgImage="/assets/images/executive-advisory-bg-option2.jpg"
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {/* When This Matters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-cormorant font-light text-heading text-ink mb-8">When This Matters</h2>
              <EmDashList
                items={[
                  'Stepping into a new leadership role',
                  'Navigating career transition or displacement',
                  'Expanding influence within the ecosystem',
                  'Preparing for board or investor visibility',
                  'Building long-term category association',
                ]}
              />
            </div>
            <div className="lg:col-span-7">
              <div className="bg-rule border border-rule rounded h-72"></div>
            </div>
          </div>

          <HorizontalRule />

          {/* What We Work On */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-rule border border-rule rounded h-72"></div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <h2 className="font-cormorant font-light text-heading text-ink mb-8">What We Work On</h2>
              <EmDashList
                items={[
                  'Strategic positioning and differentiation',
                  'Leadership narrative and identity',
                  'Industry relevance and perception',
                  'Visibility architecture',
                  'Long-term influence design',
                ]}
              />
            </div>
          </div>

          <HorizontalRule />

          {/* Our Approach */}
          <div>
            <h2 className="font-cormorant font-light text-heading text-ink mb-8">Our Approach</h2>
            <div className="max-w-3xl">
              <p className="font-dm-sans font-light text-lead text-ink leading-relaxed mb-6">
                All work is direct, confidential, and founder-led.
              </p>
              <p className="font-dm-sans font-light text-body text-muted leading-relaxed mb-6">
                We do not operate as a content engine or visibility service. We work at the level of positioning before amplification begins. Our engagements are grounded in deep research into your competitive landscape, stakeholder perception, and market dynamics. We move beyond surface-level narrative to understand the structural positioning that will support long-term relevance and influence.
              </p>
              <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                Leadership positioning is not about visibility — it&apos;s about strategic clarity. When leaders understand how they&apos;re perceived in their markets and why, they can make deliberate choices about their future. That clarity becomes the foundation for all communication and engagement that follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
