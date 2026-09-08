import { experience } from "../data/experience";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { ExperienceItem } from "../components/ExperienceItem";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-line py-24 md:py-32 lg:py-40"
    >
      <Container>
        <SectionHeader
          label="03 / Experience"
          heading="Experience"
          headingId="experience-heading"
        />

        <ul className="mt-14 md:mt-20">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
