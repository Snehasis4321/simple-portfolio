import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data";

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative rounded-2xl border-2 border-transparent bg-white p-6 shadow-md transition hover:-translate-y-2 hover:border-[#5361ff] hover:shadow-xl dark:bg-gray-800"
    >
      <FaQuoteLeft className="absolute left-5 top-4 text-3xl text-[#5361ff]/20" />

      <p className="mt-6 text-sm leading-relaxed text-gray-600 italic dark:text-gray-300">
        "{t.quote}"
      </p>

      <div className="mt-5 flex items-center gap-3">
        <img
          src={t.image}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-[#5361ff]/40"
          loading="lazy"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">{t.role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          What Clients Say
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
