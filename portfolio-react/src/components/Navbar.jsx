import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#5361ff] to-[#7b68ee] shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <span className="text-xl font-semibold tracking-wide text-white">Portfolio</span>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="rounded-md px-3 py-1.5 text-sm font-medium uppercase tracking-wide text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/60 text-white transition hover:bg-white hover:text-[#5361ff]"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col items-center gap-4 bg-gradient-to-b from-[#5361ff] to-[#7b68ee] pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="text-lg font-medium text-white/90 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
