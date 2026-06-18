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


          <motion.h1 className="text-3xl font-bold mb-4 text-white">
            Projects
          </motion.h1>


          <motion.p
            className="text-sm text-gray-300 mb-10 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A selection of real-world systems and platforms I&apos;ve built, spanning embedded systems, web applications, AI/ML, and automation.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          className="grid gap-6 md:grid-cols-2 mb-16 items-stretch"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              className="h-full"
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
                tech={p.tech}
                impact={p.impact}
                features={p.features}
              />
            </motion.div>
          ))}
        </motion.section>


      </div>
    </main>
  );
}
