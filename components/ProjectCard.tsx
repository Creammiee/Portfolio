"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  summary: string;
  tech: string[];
  impact?: string;
  features?: string[];
};

export default function ProjectCard({
  title,
  summary,
  tech,
  impact,
  features,
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
        h-full
        flex
        flex-col
      "
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {summary}
      </p>

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

      {features && features.length > 0 && (
        <div className="mb-4">
          <strong className="text-sm font-semibold text-gray-900">Key Features:</strong>
          <ul className="mt-2 space-y-1">
            {features.map((f) => (
              <li key={f} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {impact && (
        <p className="text-sm text-gray-600 leading-relaxed mt-auto pt-4">
          {impact}
        </p>
      )}
    </motion.article>
  );
}
