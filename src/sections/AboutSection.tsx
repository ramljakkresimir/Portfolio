import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Reveal } from "../components/Reveal";

const FACTS: { label: string; value: string }[] = [
  { label: "Location", value: "Croatia" },
  { label: "Focus", value: "Backend & Full-stack" },
  { label: "Education", value: "FERIT Osijek" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-line py-24 md:py-32 lg:py-40"
    >
      <Container>
        <SectionHeader
          label="02 / About"
          heading="Developer focused on building things that work."
          headingId="about-heading"
        />

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              <p>
                Krešimir Ramljak is a software developer with experience across
                backend and full-stack development. His work spans software
                projects and production websites built for real clients.
              </p>
              <p>
                He has worked with Java, Spring Boot, PostgreSQL and Docker on
                the backend, and with React and Laravel across the stack. He
                completed a professional undergraduate Computer Science programme
                at FERIT Osijek.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-4 md:col-start-9">
            <dl className="divide-y divide-line border-y border-line">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-label text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
