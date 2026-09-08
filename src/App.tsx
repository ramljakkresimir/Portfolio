import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { WorkSection } from "./sections/WorkSection";
import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { StackSection } from "./sections/StackSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
