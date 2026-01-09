"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Embedded Systems", level: 0.9 },
  { name: "Computer Vision", level: 0.85 },
  { name: "Realtime Systems", level: 0.8 },
  { name: "Cloud & Backend", level: 0.8 },
  { name: "Frontend", level: 0.7 },
  { name: "AI / ML", level: 0.75 },
];

export default function TechStack({
  customSkills,
}: {
  customSkills?: { name: string; level: number }[];
}) {
  const list = customSkills ?? skills;

  return (
    <div className="space-y-6">
      {/* Section title with better contrast */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Technical Stack
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((s) => (
          <div key={s.name}>
            {/* Label row */}
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-900 font-medium">
                {s.name}
              </span>
              <span className="text-gray-600 font-medium">
                {Math.round(s.level * 100)}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="h-2.5 bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${s.level * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
