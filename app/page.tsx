import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { formDefinitions } from '@/data/forms';
import { Card } from '@/components/ui/Card';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { Level2Gate } from '@/components/Level2Gate';

const features = [
  {
    title: 'Arrive in your body',
    description: 'Simple guided reflections that help you slow down and actually notice what is here — without judgment, without urgency.',
    image: '/images/feature-arrive.jpg',
    alt: 'Soft warm light on skin',
  },
  {
    title: 'Discover what resonates',
    description: 'Explore which benefits of somatic bodywork feel most alive for you right now — so your journey starts with what is real.',
    image: '/images/feature-discover.jpg',
    alt: 'Gentle touch, warmth and sensation',
  },
  {
    title: 'Track what shifts',
    description: 'Return over time and notice what quietly changes — in how you feel, how you move, how you show up in your own skin.',
    image: '/images/feature-track.jpg',
    alt: 'Body awareness and quiet presence',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">

      {/* ── HERO ── */}
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <SectionIntro
            titleAs="h1"
            eyebrow="Your somatic journey begins here"
            title="Your Body Has Been Waiting for You"
            description="You don't need a partner, a reason, or any experience to start. These seven reflections will help you feel more alive in your own skin — one small, honest moment at a time."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/forms"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Begin Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#explore"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-warm"
            >
              Explore the Benefits
            </Link>
          </div>

          {/* Hero image slot */}
          <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-warm">
            <Image
              src="/images/hero.jpg"
              alt="Soft warmth and body presence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>

        {/* Quote card with optional texture */}
        <Card className="relative overflow-hidden p-0">
          <div className="absolute inset-0 z-0 bg-warm">
            <Image
              src="/images/quote-texture.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="relative z-10 p-6">
            <div className="rounded-2xl border border-mist bg-white/70 p-6 backdrop-blur-sm">
              <p className="font-serif text-xl font-light italic leading-relaxed text-ink">
                &ldquo;The work you do alone is the most intimate work of your life.&rdquo;
              </p>
              <div className="mt-4 h-px w-10 bg-gradient-to-r from-primary to-transparent" />
              <p className="mt-3 text-xs font-medium uppercase tracking-widest text-primary">
                Brock John · Somatic Sex Education
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* ── FEATURES ── */}
      <section id="explore" className="space-y-8">
        <SectionIntro
          eyebrow="How this works"
          title="A guided path into your own body."
          description="Most women have spent years living from the neck up — thinking, planning, performing — completely disconnected from the warmth, power, and intelligence that lives below. These reflections are an invitation back."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              {/* Feature image slot — replaces icon */}
              <div className="relative mb-4 h-12 w-12 overflow-hidden rounded-2xl bg-warm">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── DIVIDER IMAGE between Features and Level 1 ── */}
      <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-warm">
        <Image
          src="/images/divider.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── LEVEL 1 FORMS ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">1</div>
          <SectionIntro
            eyebrow="Level 1 — Free Access"
            title="Seven reflections. One journey."
            description="Each reflection is a step deeper into embodiment. Start with the first and follow the thread."
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {formDefinitions.map((form, i) => (
            <Link key={form.slug} href={`/forms/${form.slug}`}>
              <Card className="group h-full cursor-pointer p-5 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-calm">
                <p className="mb-1 text-xs font-medium text-stone">Step {i + 1}</p>
                <h3 className="text-base font-semibold text-ink">{form.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{form.summary}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  Begin <ArrowRight className="h-3 w-3" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ── LEVEL 2 LOCKED (with member gate) ── */}
      <Level2Gate />

    </div>
  );
}
