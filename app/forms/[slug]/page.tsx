import { notFound, redirect } from 'next/navigation';
import { FormExperience } from '@/components/forms/FormExperience';
import { formDefinitions, formLookup } from '@/data/forms';
import { FormSlug } from '@/types/forms';

export function generateStaticParams() {
  return formDefinitions.map((form) => ({ slug: form.slug }));
}

export default function FormPage({ params }: { params: { slug: string } }) {
  if (params.slug === 'regulation-tracker') {
    redirect('/forms/nervous-system-check-in');
  }

  const form = formLookup[params.slug as FormSlug];

  if (!form) {
    notFound();
  }

  return <FormExperience form={form as any} />;
}
