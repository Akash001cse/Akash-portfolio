import { createFileRoute } from "@tanstack/react-router";
import Loader from "@/components/portfolio/Loader";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Gallery from "@/components/portfolio/Gallery";
import Education from "@/components/portfolio/Education";
import CodingProfiles from "@/components/portfolio/CodingProfiles";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash A — Software Engineer & Java Developer Portfolio" },
      { name: "description", content: "Portfolio of Akash A, a final-year CSE student and aspiring Java Developer & Software Engineer. Explore projects, skills, internships, achievements and coding profiles." },
      { name: "keywords", content: "Akash A, Java Developer, Software Engineer, Frontend Developer, CSE, Portfolio, Tamil Nadu" },
      { property: "og:title", content: "Akash A — Software Engineer & Java Developer Portfolio" },
      { property: "og:description", content: "Final-year CSE student & aspiring Java Developer. Projects, skills, internships, achievements and more." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Gallery />
        <Education />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
