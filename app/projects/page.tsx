"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <main className="min-h-screen relative overflow-hidden py-24 bg-transparent">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1 className="text-5xl font-bold mb-4 text-white">
            Selected Case Studies
          </motion.h1>

          <motion.div className="flex items-center gap-2 mb-6">
            <motion.span
              className="text-gray-300 text-lg"
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              (Anonymized)
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Summaries below are anonymized to protect client confidentiality.
            Each entry highlights the problem, your role, technologies used, and impact.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <ProjectCard
                title={p.title}
                summary={p.summary}
                role={p.role}
                tech={p.tech}
                impact={p.impact}
              />
            </motion.div>
          ))}
        </motion.section>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.p
            className="text-sm text-gray-400"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓ More details available upon inquiry ↓
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
