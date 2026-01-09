"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  summary,
  role,
  tech,
  impact,
}: {
  title: string;
  summary: string;
  role: string;
  tech: string[];
  impact?: string;
}) {
  return (
    <motion.article
      className="border rounded-lg p-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{summary}</p>

      <div className="text-sm text-gray-700 mb-4">
        <strong>Role:</strong> {role}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-800"
          >
            {t}
          </span>
        ))}
      </div>

      {impact && <p className="text-sm text-gray-500">{impact}</p>}
    </motion.article>
  );
}
