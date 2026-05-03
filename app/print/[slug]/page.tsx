import { notFound, redirect } from 'next/navigation';
import { PrintableSummary } from '@/components/forms/PrintableSummary';
import { formDefinitions, formLookup } from '@/data/forms';
import { FormSlug } from '@/types/forms';

export function generateStaticParams() {
  return formDefinitions.map((form) => ({ slug: form.slug }));
}

export default function PrintPage({ params }: { params: { slug: string } }) {
  if (params.slug === 'regulation-tracker') {
    redirect('/print/nervous-system-check-in');
  }

  const form = formLookup[params.slug as FormSlug];

  if (!form) {
    notFound();
  }

  return <PrintableSummary form={form as any} />;
}
