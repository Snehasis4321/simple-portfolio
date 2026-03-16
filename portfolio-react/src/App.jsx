import { useTheme } from "./hooks/useTheme";
import ParticleField from "./components/ParticleField";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="noise relative min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <ParticleField />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggle} />
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
