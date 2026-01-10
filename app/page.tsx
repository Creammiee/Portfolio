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
    transition: { duration: 0.8, ease: "easeOut" },
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
            Embedded Systems Engineer & Full-Stack Developer
          </motion.p>

          {/* INTRO */}
          <motion.p
            variants={item}
            className="text-lg text-gray-200 max-w-3xl mb-8 leading-relaxed"
          >
            I build production-ready systems across robotics, computer vision,
            and cloud-connected software — specializing in end-to-end integration
            from firmware to cloud.
          </motion.p>

          {/* HIGHLIGHTS */}
          <motion.div variants={item} className="space-y-5 max-w-3xl">
            <motion.div
              whileHover={{ x: 8 }}
              className="p-4 rounded-lg bg-white text-gray-900"
            >
              My expertise spans hardware–firmware integration, AI/ML deployment
              on edge devices, backend API design, and frontend dashboards.
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="p-4 rounded-lg bg-white text-gray-900"
            >
              I’ve delivered autonomous rovers, drones, IoT platforms, kiosk
              software, and predictive ML systems under contract.
            </motion.div>

            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ✓ Client identities and proprietary implementations are protected
              under NDA.
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex gap-4 mt-10"
          >
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
