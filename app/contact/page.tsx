"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contacts = [
  {
    label: "Email",
    value: "creammiee.dev@gmail.com",
    href: "mailto:creammiee.dev@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+63 969 198 8113",
    href: "tel:+639691988113",
    icon: "📱",
  },
  {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/639691988113",
    icon: "💬",
    external: true,
  },
  {
    label: "Viber",
    value: "Message on Viber",
    href: "viber://chat?number=%2B639691988113",
    icon: "📲",
  },
  {
    label: "Telegram",
    value: "Message on Telegram",
    href: "https://t.me/+639691988113",
    icon: "✈️",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Creammiee",
    href: "https://github.com/Creammiee",
    icon: "🐙",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/creammiee",
    href: "https://www.linkedin.com/in/creammiee/",
    icon: "💼",
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-3">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-sm max-w-xl">
              Open to freelance projects, collaborations, and full-time
              opportunities. Feel free to reach out through any channel below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left — Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">

              {/* Resume Download */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-blue-500/30 bg-blue-600/10 backdrop-blur-sm hover:bg-blue-600/20 transition-all group"
              >
                <span className="text-xl">📄</span>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                    Download Resume
                  </p>
                  <p className="text-gray-400 text-xs">PDF — Latest version</p>
                </div>
                <span className="ml-auto text-blue-400">↓</span>
              </motion.a>

              {/* Contact Links */}
              {contacts.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <span className="text-base w-7 text-center">{c.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                      {c.label}
                    </p>
                    <p className="text-gray-200 text-xs group-hover:text-white transition-colors">
                      {c.value}
                    </p>
                  </div>
                  {c.external && (
                    <span className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors text-xs">
                      ↗
                    </span>
                  )}
                </motion.a>
              ))}
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h2 className="text-base font-semibold text-white mb-5">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
