import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonials } from "../data";
import SectionHeading from "./SectionHeading";

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/[0.06] dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-950/30"
    >
      {/* Stars */}
      <div className="mb-4 flex gap-0.5" role="img" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} size={14} aria-hidden="true" className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base lg:text-lg">
        “{t.quote}”
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
        <img
          src={t.image}
          alt={t.name}
          width={48}
          height={48}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800 sm:h-12 sm:w-12"
          loading="lazy"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">{t.name}</h4>
          <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">{t.role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading center sub="Feedback from people I’ve worked with">
          What Clients Say
        </SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
