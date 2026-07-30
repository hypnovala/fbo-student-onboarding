import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionIntro } from '@/components/ui/SectionIntro';

const previewModules = [
  'Arrival',
  'Sensual Awakening',
  'Breath as Foreplay',
  'Jing Awareness',
  'Expansion',
  'Circulation',
  'Integration',
];

/**
 * Homepage section for Level 2 — shows a blurred preview of the 7 course
 * modules with a lock overlay. Actual password gating happens on the
 * /level-2 route itself (see app/level-2/layout.tsx + Level2Gate in
 * components/level-2/), not here — this is just the teaser card.
 */
export function Level2Gate() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
          2
        </div>
        <SectionIntro
          eyebrow="Level 2 — FBO Members Only"
          title="35-Minute Deep Yoni & Full-Body Orgasmic Activation"
          description="The complete somatic course — seven guided practice modules with worksheets, breath work, energy cultivation, and full integration."
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-mist">
        {/* Blurred preview cards */}
        <div className="grid select-none gap-4 p-6 opacity-60 [filter:blur(3px)] [pointer-events:none] md:grid-cols-2 xl:grid-cols-4">
          {previewModules.map((title, i) => (
            <Card key={title} className="p-5">
              <p className="mb-1 text-xs font-medium text-stone">Module {i + 1}</p>
              <h3 className="text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1 h-8 rounded bg-mist text-xs leading-5 text-muted" />
            </Card>
          ))}
        </div>

        {/* Lock overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-canvas/80 backdrop-blur-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-white shadow-calm">
            <Lock className="h-7 w-7 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-light text-ink">FBO Members Only</p>
            <p className="mt-2 max-w-sm text-sm text-stone">
              The full 35-minute somatic activation course is available to FBO members. Join to unlock all 7 practice modules.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/level-2"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone"
            >
              I&apos;m a Member — Enter <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://fbo-membership.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-mist transition hover:bg-warm"
            >
              Join FBO →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
