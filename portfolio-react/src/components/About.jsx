import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiCloud, FiPlay } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: FiCode, label: "Web Development", desc: "Modern, responsive apps" },
  { icon: FiSmartphone, label: "Mobile Apps", desc: "Flutter & native" },
  { icon: FiCloud, label: "Cloud & DevOps", desc: "AWS certified" },
  { icon: FiPlay, label: "Content Creator", desc: "YouTube tutorials" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#5361ff]/[0.03] to-transparent dark:from-[#5361ff]/[0.06]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          {/* Left — text */}
          <div>
            <SectionHeading>About Me</SectionHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg"
            >
              I'm a freelance web & mobile developer from India who loves turning ideas into polished digital products.
              I specialize in full-stack JavaScript, Flutter, and cloud infrastructure.
              When I'm not coding, I create tutorials to help beginners start their programming journey.
            </motion.p>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#5361ff]/20 hover:shadow-lg hover:shadow-[#5361ff]/[0.06] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[#5361ff]/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5361ff]/[0.08] text-[#5361ff] transition-colors group-hover:bg-[#5361ff] group-hover:text-white dark:bg-[#5361ff]/[0.15]">
                  <h.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{h.label}</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
