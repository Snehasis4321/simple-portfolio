import { motion } from "framer-motion";
import { FaAws, FaMicrosoft, FaCalendar, FaFingerprint, FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data";

const iconMap = {
  aws: FaAws,
  microsoft: FaMicrosoft,
};

function CertCard({ cert, index }) {
  const Icon = iconMap[cert.icon] || FaShieldAlt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-white p-6 shadow-md transition hover:-translate-y-2 hover:border-[#5361ff] hover:shadow-xl dark:bg-gray-800"
    >
      {/* Top accent bar */}
      <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#5361ff] to-[#7b68ee] transition-transform group-hover:scale-x-100" />

      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5361ff] to-[#7b68ee] text-2xl text-white">
          <Icon />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
        <p className="flex items-center gap-2"><FaCalendar className="text-[#5361ff]" /> Issued: {cert.date}</p>
        <p className="flex items-center gap-2"><FaFingerprint className="text-[#5361ff]" /> Exam: {cert.exam}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#5361ff] to-[#7b68ee] px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <FaShieldAlt /> Verify
        </a>
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border-2 border-[#5361ff] px-4 py-2 text-xs font-medium text-[#5361ff] transition hover:bg-[#5361ff] hover:text-white"
        >
          <FaExternalLinkAlt /> View Credential
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.exam} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
