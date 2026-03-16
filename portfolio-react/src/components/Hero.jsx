import { motion } from "framer-motion";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { roles } from "../data";

export default function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 dark:bg-gray-950 sm:px-6 lg:py-28">
      {/* Subtle gradient blob */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#5361ff]/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="bg-gradient-to-r from-[#5361ff] to-[#7b68ee] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Snehasis Ghosh
          </h1>

          <p className="mt-4 h-9 text-xl font-medium text-gray-700 dark:text-gray-300 sm:text-2xl">
            {typed}
            <span className="ml-0.5 animate-pulse text-[#5361ff]">|</span>
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Passionate about creating innovative digital solutions and helping beginners learn through online tutorials.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/Snehasis4321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-gray-800"
            >
              <FaGithub size={20} /> Github
            </a>
            <a
              href="https://www.youtube.com/@Snehasis4321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaYoutube size={20} /> Youtube
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src="https://avatars.githubusercontent.com/u/96995340"
          alt="Snehasis Ghosh"
          className="h-56 w-56 rounded-full object-cover shadow-xl ring-4 ring-[#5361ff]/30 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          loading="lazy"
        />
      </div>
    </section>
  );
}
