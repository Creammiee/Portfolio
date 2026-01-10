"use client";

import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const experiences = [
  {
    title: "Embedded & Full-Stack Systems Developer",
    company: "Contract / Independent",
    period: "2022 – Present",
    type: "Primary",
    highlights: [
      "Delivered embedded and full-stack systems under client contracts",
      "Integrated hardware, firmware, backend services, and web interfaces",
      "Built real-time, cloud-connected, and automation systems",
    ],
  },
  {
    title: "Laboratory Technician & Part-Time Instructor",
    company: "Cagayan State University",
    period: "2024 – 2025",
    type: "Education",
    highlights: [],
  },
  {
    title: "Head Technician",
    company: "Silicon Valley – Tuguegarao",
    period: "2023 – 2024",
    type: "Retail",
    highlights: [],
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A mix of contract-based systems engineering, academic instruction, and
        technical leadership.
      </motion.p>

      {/* Experience Cards */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="
              bg-white
              text-gray-900
              border
              border-gray-200
              rounded-xl
              p-6
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >
            <div className="flex items-start justify-between mb-3 gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {exp.company}
                </p>
              </div>

              <span className="shrink-0 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                {exp.period}
              </span>
            </div>

            {exp.type && (
              <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded mb-3">
                {exp.type}
              </span>
            )}

            {exp.highlights.length > 0 && (
              <ul className="space-y-2 mt-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
