import { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Start a Conversation — Change Agents',
  description:
    'We work with a small number of enterprise leaders and firms each year. All conversations are confidential.',
}

export default function ContactPage() {
  return (
    <section className="bg-ground px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full py-24">
        <div className="max-w-xl">
          <SectionLabel className="mb-6">Start a Conversation</SectionLabel>

          <h1 className="font-cormorant font-light text-title text-ink">
            We work with a small number of enterprise leaders and firms each year.
          </h1>

          <p className="font-dm-sans font-light text-lead text-muted mt-8 leading-relaxed">
            If you would like to explore a potential engagement, write to us.
            All conversations are confidential.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@changeagents.in"
              className="font-dm-sans font-light text-heading text-accent hover:opacity-70 transition-opacity duration-200"
            >
              hello@changeagents.in
            </a>
          </div>

          <p className="font-dm-sans font-light text-small text-muted mt-12 leading-relaxed max-w-sm">
            Change Agents is a founder-led advisory practice.
            We respond to every serious enquiry personally.
          </p>
        </div>
      </div>
    </section>
  )
}
