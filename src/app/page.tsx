import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorFollower from "@/components/CursorFollower";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <CursorFollower />

      <Navbar />
      <Hero />
      <TechMarquee />

      <SectionDivider label="Tentang Saya" />
      <About />

      <SectionDivider label="Pendidikan & Pengalaman" />
      <Experience />

      <SectionDivider label="Skill" />
      <Skills />

      <SectionDivider label="Layanan" />
      <Services />

      <SectionDivider label="Project" />
      <Projects />

      <SectionDivider label="Kontak" />
      <Contact />

      <Footer />
      <BackToTop />
    </main>
  );
}