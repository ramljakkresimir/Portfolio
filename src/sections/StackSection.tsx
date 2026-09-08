import { technologyGroups } from "../data/technologies";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { TechStack } from "../components/TechStack";

export function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-24 border-t border-line py-24 md:py-32 lg:py-40"
    >
      <Container>
        <SectionHeader
          label="04 / Stack"
          heading="Technologies"
          headingId="stack-heading"
        />

        <div className="mt-14 md:mt-20">
          <TechStack groups={technologyGroups} />
        </div>
      </Container>
    </section>
  );
}
