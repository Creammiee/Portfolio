"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TechStack from "@/components/TechStack";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 relative">
        {/* Animated background accent elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                  animate={{
                    y: [0, 50, 0],
                    x: [0, 30, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10"
        >
          {/* Animated line accent */}
          <motion.div
            className="mb-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Timothy Jay Marquez
          </motion.h1>

          {/* Animated subtitle with accent */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="w-2 h-2 bg-blue-600 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-2xl font-semibold text-blue-600">
              Embedded Systems Engineer & Full-Stack Developer
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed font-medium"
            variants={itemVariants}
          >
            I build production-ready systems across robotics, computer vision, and cloud-connected software. 
            Specializing in end-to-end integration from firmware to cloud, delivering complex solutions
            for autonomous platforms and real-time applications.
          </motion.p>

          <motion.div className="space-y-5 max-w-3xl" variants={itemVariants}>
            <motion.div 
              className="p-4 rounded-lg bg-white bg-opacity-60 border border-blue-100 backdrop-blur-sm"
              whileHover={{ 
                x: 8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                My expertise spans hardware-firmware integration, AI/ML deployment on edge devices,
                backend API design, and frontend dashboards — bridging the gap between
                low-level embedded systems and high-level cloud architectures.
              </p>
            </motion.div>

            <motion.div 
              className="p-4 rounded-lg bg-white bg-opacity-60 border border-blue-100 backdrop-blur-sm"
              whileHover={{ 
                x: 8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                I've delivered autonomous rovers, drone platforms, IoT prototypes,
                kiosk software, and predictive ML systems under contract. All work
                is developed with confidentiality and reliability as core priorities.
              </p>
            </motion.div>

            <motion.p 
              className="text-sm text-gray-500 pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              ✓ Client identities and proprietary implementations are protected under NDA.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div 
            className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ 
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.15)",
              y: -5
            }}
          >
            <TechStack />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
