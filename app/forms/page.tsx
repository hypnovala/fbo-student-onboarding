import { FormCard } from '@/components/forms/FormCard';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { formDefinitions } from '@/data/forms';

const journeySlugs = [
  'welcome-to-your-body',
  'pleasure-aliveness-map',
  'sensation-vocabulary',
  'desire-discovery',
  'nervous-system-check-in',
  'benefits-resonate',
  'embodied-confidence',
];

export default function FormsPage() {
  const journey = formDefinitions.filter((form) => journeySlugs.includes(form.slug));
  const bonus = formDefinitions.filter((form) => !journeySlugs.includes(form.slug));

  return (
    <div className="space-y-10">
      <SectionIntro
        titleAs="h1"
        eyebrow="Forms library"
        title="Seven steps. One embodied journey."
        description="Move through the core reflections in order, then explore bonus regulation tools at your own pace."
      />

      <section className="space-y-4">
        <h2 className="serif text-3xl text-ink">Core Journey</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {journey.map((form) => (
            <FormCard key={form.slug} form={form} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="serif text-3xl text-ink">Bonus Regulation Tools</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bonus.map((form) => (
            <FormCard key={form.slug} form={form} />
          ))}
        </div>
      </section>
    </div>
  );
}
