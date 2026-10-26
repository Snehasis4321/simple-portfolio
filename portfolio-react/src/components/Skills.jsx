import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills as baseSkills, extraSkills } from "../data";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-[#5361ff]/20 hover:shadow-md hover:shadow-[#5361ff]/[0.05] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[#5361ff]/30"
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 sm:text-base">{name}</span>
        <span className="rounded-md bg-[#5361ff]/[0.08] px-2 py-0.5 text-xs font-bold tabular-nums text-[#5361ff] dark:bg-[#5361ff]/[0.15] sm:text-sm">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#5361ff] to-[#7b68ee]"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  const allSkills = expanded ? [...baseSkills, ...extraSkills] : baseSkills;

  return (
    <section id="skills" className="bg-gray-50/50 px-6 py-24 dark:bg-gray-900/50 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading sub="Technologies I work with daily">Skills</SectionHeading>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {allSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5361ff]/30 hover:text-[#5361ff] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#5361ff] focus-visible:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#5361ff]/40 dark:hover:text-[#5361ff] sm:px-6 sm:py-3 sm:text-base"
          >
            {expanded ? "Show Less" : "Show More"}
            {expanded ? <FiChevronUp size={16} aria-hidden="true" /> : <FiChevronDown size={16} aria-hidden="true" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
