import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import { projects } from "../data";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full rounded-xl object-contain"
        />

        <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
        <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>

        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gradient-to-r from-[#5361ff] to-[#7b68ee] px-3 py-1 text-xs font-medium text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5361ff] to-[#7b68ee] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <FiExternalLink /> Visit
          </a>
          <button
            onClick={onClose}
            className="rounded-lg border-2 border-[#5361ff] px-5 py-2.5 text-sm font-medium text-[#5361ff] transition hover:bg-[#5361ff] hover:text-white"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-white px-4 py-20 dark:bg-gray-950 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(p)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${p.name}`}
              className="group relative h-56 cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-md transition hover:-translate-y-2 hover:shadow-xl sm:h-64"
              style={{ backgroundImage: `url(${p.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition group-hover:from-black/80" />
              <span className="absolute bottom-4 left-4 rounded-lg bg-[#5361ff] px-3 py-1.5 text-sm font-medium text-white shadow-md">
                {p.name}
              </span>
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
