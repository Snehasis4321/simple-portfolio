import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-0 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-sm transition hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800/80 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <FiX size={16} />
        </button>

        <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img src={project.thumbnail} alt={project.name} className="h-full w-full object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#5361ff] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4350ee] hover:shadow-lg hover:shadow-[#5361ff]/20"
            >
              <FiExternalLink size={15} /> Visit Project
            </a>
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-gray-50/50 px-5 py-24 dark:bg-gray-900/50 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading sub="A selection of things I've built">Projects</SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(p)}
              role="button"
              tabIndex={0}
              aria-label={`View ${p.name}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/[0.06] dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-950/30"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={p.thumbnail}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">{p.name}</h3>
                  <FiArrowUpRight className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5361ff]" size={16} />
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 3 && (
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-400 dark:bg-gray-800">
                      +{p.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
