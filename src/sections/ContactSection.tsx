import { Container } from "../components/Container";
import { Contact } from "../components/Contact";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line py-24 md:py-32 lg:py-40"
    >
      <Container>
        <Contact />
      </Container>
    </section>
  );
}
