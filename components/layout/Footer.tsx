import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-mist bg-canvas py-8 text-xs text-muted">
      <Container className="flex flex-col-reverse gap-2 px-4 md:flex-row md:items-center md:justify-between md:px-10">
        <p>Education only. Not medical advice.</p>
        <p className="serif text-[13px] text-stone">Brock John · Somatic Sex Education · FBO Course 2026</p>
      </Container>
    </footer>
  );
}
