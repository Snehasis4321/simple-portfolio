import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#5361ff] to-[#7b68ee] px-4 py-20 sm:px-6"
    >
      {/* Decorative dots */}
      <div className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          Hi, I'm Snehasis Ghosh, a passionate freelance web developer and mobile app developer from India.
          I specialize in creating modern, responsive web applications and mobile apps using cutting-edge technologies.
          Currently, I create educational content through online tutorials to help beginners start their programming journey.
          I work on exciting part-time projects and am always open to new opportunities and collaborations.
        </motion.p>
      </div>
    </section>
  );
}
