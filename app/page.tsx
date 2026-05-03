import Link from 'next/link';
import { ArrowRight, Eye, Heart, Star } from 'lucide-react';

const forms = [
  ['Welcome to Your Body', 'Your first arrival — no right answers, only noticing.'],
  ['Pleasure & Aliveness Map', 'Where do you feel alive? Where have you gone quiet?'],
  ['Sensation Vocabulary Builder', 'Learn to feel before you label.'],
  ['Desire Discovery', 'What do you actually want — not what you think you should?'],
  ['Know Your Nervous System', 'Notice regulated, activated, or shut down states with care.'],
  ['Benefits That Resonate', 'Which doors feel most alive for you right now?'],
  ['Embodied Confidence Check-In', 'Return here often and notice the shifts you are discovering.'],
];

export default function HomePage() {
  return (
    <div className="space-y-0">
      <section>
        <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-primary before:block before:h-px before:w-8 before:bg-primary">Your somatic journey begins here</p>
            <h1 className="serif mb-6 text-4xl font-light leading-[1.18] tracking-tight md:text-6xl">Before the right person finds you — <em className="text-primary">find yourself.</em></h1>
            <p className="mb-10 max-w-xl text-base font-light text-stone">Not with a partner. Not with a goal. With you — arriving in your own body, maybe for the first time.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="#forms" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[13px] font-medium tracking-[0.04em] text-white">Begin Your Journey <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#explore" className="inline-flex items-center rounded-full border border-mist px-7 py-3 text-[13px] tracking-[0.04em] text-ink">Explore the Benefits</Link>
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-[20px] border border-mist bg-card p-9">
            <blockquote className="serif relative z-10 mb-4 text-2xl font-light italic leading-relaxed">“The work you do alone is the most intimate work of your life.”</blockquote>
            <div className="mb-3 h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary">Brock John · Somatic Sex Education</p>
          </aside>
        </div>
      </section>

      <div className="h-px bg-mist" />

      <section id="explore" className="py-16 md:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-primary">How this works</span>
          <h2 className="serif mb-4 text-4xl font-light">A guided path into your own body.</h2>
          <p className="text-[15px] font-light text-stone">These reflections invite you to notice, feel, and discover the warmth and intelligence already within you at your own pace.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-mist bg-card p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Eye className="h-5 w-5" /></div>
            <h3 className="serif text-[20px] text-ink">Arrive in your body</h3>
            <p className="mt-2 text-sm font-light leading-7 text-stone">Simple guided reflections that help you slow down and notice what is here.</p>
          </article>
          <article className="rounded-2xl border border-mist bg-card p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Star className="h-5 w-5" /></div>
            <h3 className="serif text-[20px] text-ink">Discover what resonates</h3>
            <p className="mt-2 text-sm font-light leading-7 text-stone">Explore which benefits of somatic bodywork feel most alive for you right now.</p>
          </article>
          <article className="rounded-2xl border border-mist bg-card p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Heart className="h-5 w-5" /></div>
            <h3 className="serif text-[20px] text-ink">Track what shifts</h3>
            <p className="mt-2 text-sm font-light leading-7 text-stone">Return over time and notice what quietly changes in how you feel and move.</p>
          </article>
        </div>
      </section>

      <div className="h-px bg-mist" />

      <section id="forms" className="-mx-4 bg-warm px-4 py-16 md:-mx-10 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-primary">Your reflections</span>
          <h2 className="serif mb-4 text-4xl font-light">Seven forms. One journey.</h2>
          <p className="text-[15px] font-light text-stone">Each reflection is a step deeper into embodiment. Begin with step one or arrive where you feel called.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {forms.map(([title, summary], index) => (
            <Link href="/forms" key={title} className="relative rounded-2xl border border-mist bg-card p-6 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-calm">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">Step {String(index + 1).padStart(2, '0')}</p>
              <h3 className="serif text-[17px] leading-snug text-ink">{title}</h3>
              <p className="mt-2 pr-8 text-xs font-light leading-6 text-muted">{summary}</p>
              <span className="absolute bottom-5 right-5 rounded-full bg-warm p-1.5 text-primary"><ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
