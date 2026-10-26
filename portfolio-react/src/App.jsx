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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#5361ff] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-xl focus:ring-2 focus:ring-white focus:outline-hidden"
      >
        Skip to main content
      </a>
      <ParticleField />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggle} />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
