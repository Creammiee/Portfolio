"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }, // ✅ FIXED (no ease string)
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 relative">

        {/* BACKGROUND BLOBS — UNCHANGED */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* NAME */}
          <motion.h1
            variants={item}
            className="text-7xl font-bold mb-6 text-white"
          >
            Timothy Jay Marquez
          </motion.h1>

          {/* TITLE */}
          <motion.p
            variants={item}
            className="text-2xl font-semibold text-blue-400 mb-8"
          >
            Full-Stack Developer · Embedded Systems Engineer · AI Engineer
          </motion.p>

          {/* INTRO */}
          <motion.p
            variants={item}
            className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Full-Stack Developer and AI Engineer with experience in building web
            applications, AI-powered systems, automation solutions, and computer
            vision projects. I specialize in developing scalable applications
            using modern technologies such as React, Next.js, Node.js, Python,
            PostgreSQL, and cloud-based services.
          </motion.p>

          {/* HIGHLIGHTS */}
          <motion.div variants={item} className="space-y-4 max-w-2xl mb-10">
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="text-blue-400 text-lg mt-0.5">🤖</span>
              <p className="text-gray-200 text-sm leading-relaxed">
                Background includes AI models, LLM integrations, AI agents,
                workflow automation, APIs, and machine learning solutions.
                Focused on transforming complex business requirements into
                efficient, user-friendly software.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="text-blue-400 text-lg mt-0.5">🔭</span>
              <p className="text-gray-200 text-sm leading-relaxed">
                Experienced in computer vision projects using Raspberry Pi,
                YOLO, and IoT devices, combining hardware and software to
                build intelligent, real-world systems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="text-blue-400 text-lg mt-0.5">💡</span>
              <p className="text-gray-200 text-sm leading-relaxed">
                Passionate about continuous learning, solving challenging
                problems, and leveraging emerging technologies to build
                innovative products that make a meaningful impact.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="flex gap-4 mt-10">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            variants={item}
            className="mt-16 bg-white text-gray-900 rounded-xl p-8"
          >
            <TechStack />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}