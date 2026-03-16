import { useState } from "react";
import { motion } from "framer-motion";
import { skills as baseSkills, extraSkills } from "../data";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-xs font-medium text-[#5361ff]">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
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
    <section id="skills" className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {allSkills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mx-auto mt-8 flex items-center gap-2 rounded-lg border-2 border-[#5361ff] px-6 py-2.5 text-sm font-semibold text-[#5361ff] transition hover:bg-[#5361ff] hover:text-white"
        >
          {expanded ? "View Less" : "View More"}
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
    </section>
  );
}
