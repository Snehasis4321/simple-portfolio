import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#5361ff] focus:ring-4 focus:ring-[#5361ff]/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#5361ff] dark:focus:ring-[#5361ff]/20 sm:text-base sm:py-3.5";

export default function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-gray-50/50 px-6 py-24 dark:bg-gray-900/50 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading center sub="Have a project in mind? Let's talk.">
          Get In Touch
        </SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr,1.3fr] lg:items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5361ff]/[0.08] text-[#5361ff] dark:bg-[#5361ff]/[0.15]">
                <FiMail size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">Email</h3>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400 sm:text-base">Drop me a message anytime</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5361ff]/[0.08] text-[#5361ff] dark:bg-[#5361ff]/[0.15]">
                <FiMapPin size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">Location</h3>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400 sm:text-base">India — available worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            action="https://formsubmit.co/053a14a9e4bd99724b5275722e215d4e"
            method="POST"
            onSubmit={() => setSending(true)}
            className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" id="email" placeholder="you@example.com" required className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Tell me about your project..." required className={inputClass + " resize-y"} />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 rounded-xl bg-[#5361ff] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4350ee] hover:shadow-lg hover:shadow-[#5361ff]/20 disabled:opacity-50 disabled:hover:translate-y-0 sm:px-7 sm:py-3.5 sm:text-base"
            >
              <FiSend size={15} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
