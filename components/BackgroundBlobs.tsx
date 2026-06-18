"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blue blob — top right */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20"
        animate={{
          x: [0, -120, 60, -80, 0],
          y: [0, 80, -60, 120, 0],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Purple blob — bottom left */}
      <motion.div
        className="absolute bottom-[-120px] left-[-80px] w-[450px] h-[450px] bg-purple-500 rounded-full blur-[120px] opacity-20"
        animate={{
          x: [0, 100, -60, 80, 0],
          y: [0, -80, 60, -100, 0],
          scale: [1, 0.9, 1.2, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Indigo blob — center */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[140px] opacity-10"
        animate={{
          x: [0, 80, -100, 60, 0],
          y: [0, -60, 80, -40, 0],
          scale: [1, 1.2, 0.85, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Cyan accent — top left */}
      <motion.div
        className="absolute top-[20%] left-[-60px] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px] opacity-10"
        animate={{
          x: [0, 60, -40, 80, 0],
          y: [0, 40, -80, 20, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
    </div>
  );
}
