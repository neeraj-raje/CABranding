import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import TwoColumnStatement from '@/components/sections/TwoColumnStatement'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import EmDashList from '@/components/ui/EmDashList'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Company Advisory — Change Agents',
  description:
    'Market architecture and category positioning for enterprise technology firms.',
}

export default function CompanyAdvisoryPage() {
  return (
    <>
      <PageHero
        heading={`Market Architecture\nfor Enterprise Technology`}
        lead="We work with enterprise technology firms to define how they are positioned in competitive markets — beyond product messaging and marketing narratives."
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          <TwoColumnStatement heading="Where We Focus">
            <EmDashList
              items={[
                'Category positioning and definition',
                'Revenue narrative alignment',
                'Competitive differentiation',
                'India and global market positioning',
                'Analyst and ecosystem perception',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <TwoColumnStatement heading="Typical Situations">
            <EmDashList
              items={[
                'Scaling beyond early growth stage',
                'Entering new markets or segments',
                'Repositioning services or offerings',
                'Strengthening enterprise credibility',
                'Aligning leadership narrative with business strategy',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <div className="max-w-2xl mx-auto text-center py-8">
            <p className="font-cormorant font-light text-title text-ink leading-snug">
              We operate upstream of communications — clarifying the strategic foundation
              before visibility and messaging are executed.
            </p>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
