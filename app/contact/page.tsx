"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Contact
        </motion.h2>

        <motion.div className="mb-12 space-y-4" variants={itemVariants}>
          <p className="text-gray-600">
            Interested in working together or learning more? Reach out below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>

            <div className="text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:creammiee.dev@gmail.com" className="underline">creammiee.dev@gmail.com</a>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span>📱</span>
                <span>+63-9691988113</span>
              </div>
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </motion.div>
    </section>
  );
}
