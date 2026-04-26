import { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import TwoColumnStatement from '@/components/sections/TwoColumnStatement'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import EmDashList from '@/components/ui/EmDashList'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'The Collective — Change Agents',
  description:
    'A curated group of independent senior advisors who collaborate with Change Agents on select engagements.',
}

export default function TheCollectivePage() {
  return (
    <>
      <PageHero
        heading={`The Change Agents\nCollective`}
        lead="A curated group of independent senior advisors who collaborate with Change Agents on select engagements requiring a broader combination of perspectives."
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {/* Context */}
          <div className="max-w-2xl">
            <p className="font-dm-sans font-light text-body text-muted leading-relaxed mb-6">
              Change Agents operates as a founder-led strategic advisory practice. In situations
              where business challenges extend beyond positioning into leadership, behaviour, or
              organisational alignment, we work with a select group of independent advisors.
            </p>
            <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
              These are individuals who bring deep experience and operate in their own right —
              and collaborate with us where required.
            </p>
          </div>

          <HorizontalRule />

          <TwoColumnStatement heading="How This Works">
            <EmDashList
              items={[
                'Each advisor maintains an independent identity and practice',
                'Engagement with Change Agents is selective and context-driven',
                'Collaboration is based on trust, relevance, and problem fit',
                'We do not operate as a network or marketplace',
                'The Collective is intentionally small and curated',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          <TwoColumnStatement heading="When the Collective Is Engaged">
            <EmDashList
              items={[
                'Strategic positioning requires leadership alignment',
                'Business transitions require behavioural or organisational shifts',
                'Founder or leadership journeys intersect with market perception',
                'Complex situations require multiple lenses beyond communication',
              ]}
            />
          </TwoColumnStatement>

          <HorizontalRule />

          {/* Sharbari Chakraborty */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs overflow-hidden">
                <Image
                  src="/assets/team/sharbari-chakraborty.jpg"
                  alt="Sharbari Chakraborty — Leadership Coach and Organisational Transformation"
                  width={320}
                  height={320}
                  className="grayscale-photo w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-cormorant font-normal text-heading text-ink">
                Sharbari Chakraborty
              </h2>
              <SectionLabel className="mt-2">
                Leadership Coach &nbsp;·&nbsp; Organisational Transformation
              </SectionLabel>

              <div className="mt-6 max-w-prose space-y-4">
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  Sharbari works with senior leaders and leadership teams on navigating complexity,
                  enabling behavioural shifts, and building organisational alignment.
                </p>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  Her work sits at the intersection of leadership, culture, and execution —
                  particularly in environments undergoing transition, growth, or structural change.
                </p>
              </div>

              <EmDashList
                className="mt-6"
                items={[
                  'Leadership coaching and development',
                  'Organisational alignment and transformation',
                  'Behavioural change and team dynamics',
                  'Navigating leadership transitions',
                ]}
              />

              <blockquote className="mt-8">
                <p className="font-cormorant font-light italic text-lead text-muted leading-relaxed">
                  &ldquo;Leadership transitions are rarely about strategy alone. They require a shift
                  in how leaders see themselves — and how they are seen by others.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
