import { education } from "../data/education";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-t border-line py-16 md:py-20"
    >
      <Container>
        <Reveal>
          <h2 id="education-heading" className="u-label flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            05 / Education
          </h2>
        </Reveal>

        <ul className="mt-8">
          {education.map((item) => (
            <Reveal as="li" key={item.institution}>
              <div className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-xs uppercase tracking-label text-muted md:col-span-3">
                  {item.period}
                </p>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-medium tracking-tighter2">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {item.qualification}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
