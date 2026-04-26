import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Communications — Change Agents',
  description:
    'Integrated communications, visibility, and narrative activation grounded in prior strategic clarity.',
}

const services = [
  {
    label: 'Thought Leadership',
    body: 'Structured insights, industry commentary and articles, speech and keynote narratives.',
  },
  {
    label: 'Industry Visibility',
    body: 'Conferences and panels, podcasts and interviews, media commentary.',
  },
  {
    label: 'Digital Presence',
    body: 'LinkedIn positioning, personal website where required, search visibility.',
  },
  {
    label: 'Long-Term Authority',
    body: 'Newsletters, podcast or video series, research and reports, book development.',
  },
]

export default function CommunicationsPage() {
  return (
    <>
      <PageHero
        heading={`Communications, Visibility\nand Narrative Activation`}
        lead="Once positioning is defined, we support its activation across relevant platforms. This is not a content engine. It is an extension of strategic positioning."
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-rule">
            {services.map((service, i) => (
              <div
                key={i}
                className={`border-t border-rule pt-8 pb-12 sm:pr-12 ${
                  i % 2 !== 0 ? 'sm:pl-12 sm:border-l' : ''
                } ${i >= 2 ? 'sm:mt-8 sm:border-t' : ''}`}
              >
                <SectionLabel className="mb-4">{service.label}</SectionLabel>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed mt-4">
                  {service.body}
                </p>
              </div>
            ))}
          </div>

          <HorizontalRule className="mt-16 mb-16" />

          {/* Important note */}
          <div className="border border-rule p-10 lg:p-14 max-w-2xl mx-auto text-center">
            <h2 className="font-cormorant font-light text-heading text-ink">
              All activation work is grounded in prior strategic clarity.
            </h2>
            <p className="font-dm-sans font-light text-body text-muted mt-6">
              We do not begin with visibility.
            </p>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
