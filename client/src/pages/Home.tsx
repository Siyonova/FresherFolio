import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarsCanvas";

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen">
      <StarsCanvas />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
