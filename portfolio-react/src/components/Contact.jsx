import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    setSending(true);
    // Form submits natively to formsubmit.co
  };

  return (
    <section id="contact" className="bg-white px-4 py-20 dark:bg-gray-950 sm:px-6">
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action="https://formsubmit.co/053a14a9e4bd99724b5275722e215d4e"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <input type="hidden" name="_subject" value="New Portfolio Contact" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#5361ff] focus:ring-2 focus:ring-[#5361ff]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#5361ff] focus:ring-2 focus:ring-[#5361ff]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full resize-y rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#5361ff] focus:ring-2 focus:ring-[#5361ff]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5361ff] to-[#7b68ee] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
          >
            <FiSend />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
