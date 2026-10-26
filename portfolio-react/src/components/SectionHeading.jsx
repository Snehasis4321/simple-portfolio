import { motion } from "framer-motion";

export default function SectionHeading({ children, sub, center }) {
  return (
    <div className={center ? "text-center" : ""}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl font-bold tracking-tight text-gray-900 text-balance dark:text-white sm:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </motion.h2>
      {sub ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base text-gray-500 text-balance dark:text-gray-400 sm:text-lg lg:text-xl"
        >
          {sub}
        </motion.p>
      ) : null}
    </div>
  );
}
