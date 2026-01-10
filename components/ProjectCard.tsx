"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  summary: string;
  role: string;
  tech: string[];
  impact?: string;
};

export default function ProjectCard({
  title,
  summary,
  role,
  tech,
  impact,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {summary}
      </p>

      <div className="text-sm text-gray-800 mb-4">
        <strong className="font-semibold text-gray-900">Role:</strong>{" "}
        {role}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="
              text-xs
              px-2
              py-1
              bg-gray-100
              text-gray-800
              rounded-full
              border
              border-gray-200
            "
          >
            {t}
          </span>
        ))}
      </div>

      {impact && (
        <p className="text-sm text-gray-600 leading-relaxed">
          {impact}
        </p>
      )}
    </motion.article>
  );
}
