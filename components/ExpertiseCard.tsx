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
      className="border rounded-lg p-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <ul className="text-gray-600 mt-3 space-y-1">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          className="ml-4 text-sm px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
        >
          {open ? "Hide" : "Details"}
        </button>
      </div>

      {open && microCases && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-4 pt-4 border-t"
        >
          {microCases.map((m) => (
            <div key={m.id} className="mb-3">
              <h4 className="font-medium">{m.title}</h4>
              <p className="text-sm text-gray-600">{m.blurb}</p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
