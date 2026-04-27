import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Company Advisory — Change Agents',
  description:
    'Market architecture and category positioning for enterprise technology firms.',
}

export default function CompanyAdvisoryPage() {
  const focusAreas = [
    {
      title: 'Category Positioning',
      description: 'Define how your category is perceived and positioned in competitive markets.',
    },
    {
      title: 'Revenue Narrative',
      description: 'Align your business model narrative with market reality and competitive positioning.',
    },
    {
      title: 'Competitive Differentiation',
      description: 'Clarify structural advantages and positioning that sustain competitive relevance.',
    },
    {
      title: 'Market Expansion',
      description: 'Develop positioning strategies for India and Asia-Pacific market entry.',
    },
    {
      title: 'Ecosystem Perception',
      description: 'Shape how analysts, investors, and buyers perceive your firm in the market.',
    },
  ]

  const situations = [
    'Scaling beyond early growth stage',
    'Entering new markets or geographic regions',
    'Repositioning core services or product lines',
    'Strengthening enterprise market credibility',
    'Aligning organizational narrative with strategic direction',
  ]

  return (
    <>
      <PageHero
        heading={`Market Architecture\nfor Enterprise Technology`}
        lead="We work with enterprise technology firms to define how they are positioned in competitive markets — beyond product messaging and marketing narratives."
        boldSans={true}
        bgImage="/assets/images/company-advisory-bg.jpg"
      />

      {/* Where We Focus Section */}
      <section className="bg-white px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-dm-sans font-bold text-4xl lg:text-5xl text-ink mb-16">
            Where We Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6">
                <h3 className="font-dm-sans font-semibold text-xl text-ink mb-3">
                  {area.title}
                </h3>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Situations Section */}
      <section className="bg-accent px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-dm-sans font-bold text-4xl lg:text-5xl text-white mb-16">
            Typical Situations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {situations.map((situation, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 border border-white/20 rounded p-6">
                <p className="font-dm-sans font-normal text-lg text-white leading-relaxed">
                  {situation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insight Section */}
      <section className="bg-white px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-dm-sans font-bold text-sm uppercase tracking-widest text-accent mb-6">
            Strategic Foundation
          </h3>
          <h2 className="font-dm-sans font-bold text-4xl lg:text-5xl text-ink mb-8 leading-tight">
            We operate upstream of communications
          </h2>
          <p className="font-dm-sans font-light text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Clarifying the strategic foundation before visibility and messaging are executed. Market positioning is not about amplification — it&apos;s about structural clarity in how your firm is perceived and positioned in competitive markets.
          </p>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
