"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExpertiseCard({
  title,
  bullets,
  microCases,
}: {
  title: string;
  bullets: string[];
  microCases?: { id: string; title: string; blurb: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border rounded-lg p-6 bg-white text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {title}
          </h3>

          <ul className="mt-3 space-y-1 text-gray-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          className="ml-4 text-sm px-3 py-2 border rounded-md
                     text-gray-800 border-gray-300
                     hover:bg-gray-100"
        >
          {open ? "Hide" : "Details"}
        </button>
      </div>

      {open && microCases && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-4 pt-4 border-t border-gray-200"
        >
          {microCases.map((m) => (
            <div key={m.id} className="mb-3">
              <h4 className="font-medium text-gray-900">
                {m.title}
              </h4>
              <p className="text-sm text-gray-600">
                {m.blurb}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
