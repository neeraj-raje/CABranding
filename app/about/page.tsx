import { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import HorizontalRule from '@/components/ui/HorizontalRule'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'About — Change Agents',
  description:
    'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="About Change Agents"
        lead="Change Agents began as an enterprise technology communications firm. Over time, our work increasingly moved upstream — from managing visibility to shaping the positioning that determines it. Today, we operate at the level of enterprise market architecture."
      />

      <section className="bg-ground px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">

          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs overflow-hidden">
                <Image
                  src="/assets/team/shubhendu-nath.jpg"
                  alt="Shubhendu Nath — Founder, Change Agents"
                  width={320}
                  height={320}
                  className="grayscale-photo w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-cormorant font-normal text-heading text-ink">
                Shubhendu Nath
              </h2>
              <SectionLabel className="mt-2">Founder, Change Agents</SectionLabel>

              <div className="mt-6 max-w-prose space-y-4">
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  Shubhendu works directly with enterprise technology leaders and firms on strategic
                  positioning, narrative alignment, and market architecture.
                </p>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  His experience spans over two decades across enterprise technology ecosystems
                  in India and Asia-Pacific.
                </p>
              </div>
            </div>
          </div>

          <HorizontalRule />

          {/* How We Work */}
          <div>
            <h2 className="font-cormorant font-light text-title text-ink mb-8">
              How We Work
            </h2>
            <p className="font-dm-sans font-light text-body text-muted leading-relaxed max-w-2xl mb-16">
              Change Agents operates as a founder-led strategic advisory practice, working with
              a limited number of enterprise technology leaders and firms each year.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-rule">
              <div className="pt-8 pb-12 md:pr-12">
                <SectionLabel>Strategic Advisory</SectionLabel>
                <p className="font-dm-sans font-light text-small text-muted mt-1 mb-4 italic">
                  Led by Shubhendu Nath
                </p>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  All engagements are shaped at the level of enterprise market architecture,
                  positioning, and narrative alignment.
                </p>
              </div>

              <div className="pt-8 pb-12 md:px-12">
                <SectionLabel>Digital &amp; Narrative Strategy</SectionLabel>
                <p className="font-dm-sans font-light text-small text-muted mt-1 mb-4 italic">
                  Led by Neeraj Raje
                </p>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  Where required, strategic thinking is translated into visible platforms
                  through content, digital presence, and narrative amplification.
                </p>
              </div>

              <div className="pt-8 pb-12 md:pl-12">
                <SectionLabel>Institutional Backbone</SectionLabel>
                <p className="font-dm-sans font-light text-small text-muted mt-1 mb-4 italic">
                  Anchored by Krishnananda
                </p>
                <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
                  Ensuring continuity, operational depth, and execution capability
                  when activation is required.
                </p>
              </div>
            </div>

            {/* Team photographs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/assets/team/neeraj-raje.jpg"
                    alt="Neeraj Raje — Digital & Narrative Strategy"
                    width={320}
                    height={320}
                    className="grayscale-photo w-full h-full object-cover"
                  />
                </div>
                <p className="font-dm-sans font-light text-small text-muted text-center mt-3">
                  Neeraj Raje
                </p>
                <p className="font-dm-sans font-light text-micro text-muted text-center">
                  Digital &amp; Narrative Strategy
                </p>
              </div>

              <div>
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/assets/team/krishnananda.jpg"
                    alt="Krishnananda — Institutional Backbone"
                    width={320}
                    height={320}
                    className="grayscale-photo w-full h-full object-cover"
                  />
                </div>
                <p className="font-dm-sans font-light text-small text-muted text-center mt-3">
                  Krishnananda
                </p>
                <p className="font-dm-sans font-light text-micro text-muted text-center">
                  Institutional Backbone
                </p>
              </div>
            </div>
          </div>

          <HorizontalRule />

          {/* Legacy */}
          <div className="max-w-2xl mx-auto text-center py-8">
            <p className="font-dm-sans font-light text-body text-muted leading-relaxed">
              Our work spans infrastructure, cybersecurity, SaaS, distribution, and digital
              transformation ecosystems — across founders, country heads, and global technology firms.
            </p>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
