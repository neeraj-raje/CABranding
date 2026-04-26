import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import TwoColumnStatement from '@/components/sections/TwoColumnStatement'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import EmDashList from '@/components/ui/EmDashList'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

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
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          <TwoColumnStatement heading="When This Matters">
            <EmDashList
              items={[
                'Stepping into a new leadership role',
                'Navigating career transition or displacement',
                'Expanding influence within the ecosystem',
                'Preparing for board or investor visibility',
                'Building long-term category association',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <TwoColumnStatement heading="What We Work On">
            <EmDashList
              items={[
                'Strategic positioning and differentiation',
                'Leadership narrative and identity',
                'Industry relevance and perception',
                'Visibility architecture',
                'Long-term influence design',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <TwoColumnStatement heading="Our Approach">
            <div className="max-w-prose">
              <SectionLabel className="mb-4">How We Engage</SectionLabel>
              <p className="font-dm-sans font-light text-lead text-ink leading-relaxed mb-6">
                All work is direct, confidential, and founder-led.
              </p>
              <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                We do not operate as a content engine or visibility service. We work at the level
                of positioning before amplification begins.
              </p>
            </div>
          </TwoColumnStatement>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
