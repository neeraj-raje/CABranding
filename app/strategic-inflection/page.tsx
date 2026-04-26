import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import TwoColumnStatement from '@/components/sections/TwoColumnStatement'
import NatureOfWork from '@/components/sections/NatureOfWork'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import EmDashList from '@/components/ui/EmDashList'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Strategic Inflection — Change Agents',
  description:
    'High-stakes advisory during leadership transitions, market entry, M&A, and structural repositioning.',
}

export default function StrategicInflectionPage() {
  return (
    <>
      <PageHero
        heading={`At Critical Moments,\nPositioning Carries\nDisproportionate Impact.`}
        lead="We work with leaders and firms during high-stakes transitions where clarity, timing, and narrative alignment are essential."
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          <TwoColumnStatement heading="Typical Engagements">
            <EmDashList
              items={[
                'Leadership transitions',
                'Market entry or expansion',
                'M&A and pre/post acquisition positioning',
                'Crisis or reputation recalibration',
                'Structural repositioning',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <div>
            <SectionLabel className="mb-8">Nature of Work</SectionLabel>
            <NatureOfWork
              items={[
                { label: 'Duration', text: 'Short and high-intensity' },
                { label: 'Involvement', text: 'Direct founder involvement' },
                { label: 'Character', text: 'Confidential and context-driven' },
                { label: 'Focus', text: 'Clarity, not volume' },
              ]}
            />
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
