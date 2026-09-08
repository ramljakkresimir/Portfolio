import { useCallback, useRef, useState } from "react";

import { projects } from "../data/projects";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

export function WorkSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = useCallback((id: string, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setOpenId(id);
  }, []);

  const handleClose = useCallback(() => setOpenId(null), []);

  const openProject = projects.find((project) => project.id === openId) ?? null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40"
    >
      <Container>
        <SectionHeader
          label="01 / Selected work"
          heading="Selected projects"
          headingId="work-heading"
        />

        <div className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </Container>

      <ProjectModal
        project={openProject}
        onClose={handleClose}
        returnFocusRef={triggerRef}
      />
    </section>
  );
}
