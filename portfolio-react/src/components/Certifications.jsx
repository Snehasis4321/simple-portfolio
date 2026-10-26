import { motion } from "framer-motion";
import { FaAws, FaMicrosoft, FaCalendar, FaFingerprint, FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data";
import SectionHeading from "./SectionHeading";

const iconMap = { aws: FaAws, microsoft: FaMicrosoft };

function CertCard({ cert, index }) {
  const Icon = iconMap[cert.icon] || FaShieldAlt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/[0.06] dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-950/30"
    >
      {/* Hover gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5361ff] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5361ff]/10 to-[#7b68ee]/10 text-xl text-[#5361ff] transition-all duration-300 group-hover:from-[#5361ff] group-hover:to-[#7b68ee] group-hover:text-white dark:from-[#5361ff]/20 dark:to-[#7b68ee]/20">
          <Icon aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-white sm:text-lg">{cert.name}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
        <span className="flex items-center gap-1.5"><FaCalendar className="text-[#5361ff]/60" aria-hidden="true" />{cert.date}</span>
        <span className="flex items-center gap-1.5"><FaFingerprint className="text-[#5361ff]/60" aria-hidden="true" />{cert.exam}</span>
      </div>

      <div className="mt-5 flex gap-2">
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${cert.name} credential (opens in new tab)`}
          className="flex items-center gap-1.5 rounded-lg bg-[#5361ff] px-3.5 py-2 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4350ee] hover:shadow-md hover:shadow-[#5361ff]/20 focus-visible:ring-2 focus-visible:ring-[#5361ff] focus-visible:ring-offset-2 focus-visible:outline-hidden sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <FaShieldAlt size={12} aria-hidden="true" /> Verify
        </a>
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.name} credential details (opens in new tab)`}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5361ff]/30 hover:text-[#5361ff] focus-visible:ring-2 focus-visible:ring-[#5361ff] focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-gray-700 dark:text-gray-400 dark:hover:border-[#5361ff]/40 dark:hover:text-[#5361ff] sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <FaExternalLinkAlt size={10} aria-hidden="true" /> Credential
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading sub="Professional credentials and achievements">Certifications</SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.exam} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
