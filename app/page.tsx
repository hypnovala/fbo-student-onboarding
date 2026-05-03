import Link from 'next/link';
import { ArrowRight, Sparkles, Waves, Heart } from 'lucide-react';
import { formDefinitions } from '@/data/forms';
import { Card } from '@/components/ui/Card';
import { SectionIntro } from '@/components/ui/SectionIntro';

const features = [
  {
    title: 'Arrive in your body',
    description: 'Simple guided reflections that help you slow down and actually notice what is here.',
    icon: Waves,
  },
  {
    title: 'Discover what resonates',
    description: 'Explore which benefits of somatic bodywork feel most alive for you right now.',
    icon: Sparkles,
  },
  {
    title: 'Track what shifts',
    description: 'Return over time and watch your relationship with your body quietly change.',
    icon: Heart,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <SectionIntro
            titleAs="h1"
            title="Before the right person finds you — find yourself."
            description="This is the beginning of your somatic journey. Simple, guided reflections designed to help you come home to your body — build presence, discover desire, and develop the kind of embodied confidence that changes everything."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/forms" className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
              Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/explore" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
              Explore the Benefits
            </Link>
          </div>
        </div>

        <Card className="p-6">
          <div className="rounded-[24px] border border-mist bg-gradient-to-br from-white to-warm/25 p-6">
            <p className="text-sm font-medium text-ink italic">
              "The work you do alone is the most intimate work of your life."
            </p>
            <p className="mt-3 text-xs text-stone">— Brock John · Somatic Sex Education</p>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="How this works"
          title="A guided path into your own body."
          description="Most women have spent years living from the neck up — thinking, planning, performing — completely disconnected from the warmth, power, and intelligence that lives below. These reflections are an invitation back."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/15 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Your reflections"
          title="Seven forms. One journey."
          description="Each reflection is a step deeper into embodiment. Start with the first and follow the thread — or go wherever feels most alive right now."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {formDefinitions.map((form, i) => (
            <Card key={form.slug} className="p-5">
              <p className="mb-1 text-xs font-medium text-stone">Step {i + 1}</p>
              <h3 className="text-base font-semibold text-ink">{form.title}</h3>
              <p className="mt-1 text-xs text-muted leading-5">{form.summary}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
