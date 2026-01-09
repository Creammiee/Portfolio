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

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 0.9 },
      { name: "Python", level: 0.85 },
      { name: "C", level: 0.8 },
      { name: "JavaScript / TypeScript", level: 0.85 },
      { name: "Java", level: 0.75 },
      { name: "C#", level: 0.75 },
    ],
  },
  {
    title: "Backend Frameworks & Tools",
    skills: [
      { name: "Node.js", level: 0.85 },
      { name: "Express", level: 0.85 },
      { name: "Django", level: 0.8 },
      { name: "Flask", level: 0.8 },
      { name: "FastAPI", level: 0.75 },
      { name: "Spring", level: 0.7 },
      { name: "ASP.NET Core", level: 0.7 },
      { name: "REST APIs", level: 0.9 },
    ],
  },
  {
    title: "Frontend & Web Frameworks",
    skills: [
      { name: "React", level: 0.9 },
      { name: "Next.js", level: 0.85 },
      { name: "Vue", level: 0.8 },
      { name: "Angular", level: 0.75 },
      { name: "Svelte", level: 0.7 },
      { name: "Remix", level: 0.7 },
      { name: "Astro", level: 0.7 },
      { name: "Nuxt", level: 0.7 },
    ],
  },
  {
    title: "Mobile & Desktop",
    skills: [
      { name: "React Native", level: 0.8 },
      { name: "Electron", level: 0.8 },
      { name: "JavaFX", level: 0.75 },
      { name: "WPF", level: 0.7 },
    ],
  },
  {
    title: "Embedded & Hardware",
    skills: [
      { name: "Firmware Development", level: 0.9 },
      { name: "ROS", level: 0.85 },
      { name: "ESP32", level: 0.85 },
      { name: "Raspberry Pi", level: 0.85 },
      { name: "Arduino", level: 0.8 },
      { name: "Motor Control", level: 0.85 },
      { name: "I2C / SPI / UART", level: 0.9 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "OpenCV", level: 0.85 },
      { name: "YOLO v3–v9", level: 0.85 },
      { name: "TensorFlow / TF Lite", level: 0.8 },
      { name: "Scikit-learn", level: 0.8 },
      { name: "Edge AI Deployment", level: 0.85 },
      { name: "Model Quantization", level: 0.8 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS IoT", level: 0.8 },
      { name: "Google Cloud", level: 0.75 },
      { name: "Google APIs", level: 0.75 },
      { name: "Oracle Cloud", level: 0.7 },
      { name: "Docker", level: 0.85 },
      { name: "Kubernetes", level: 0.75 },
      { name: "SQL / Postgres", level: 0.85 },
    ],
  },
  {
    title: "Build Tools & Testing",
    skills: [
      { name: "Jest", level: 0.8 },
      { name: "Pytest", level: 0.8 },
      { name: "Webpack", level: 0.8 },
      { name: "Vite", level: 0.8 },
      { name: "Git", level: 0.9 },
    ],
  },
];

export default function Expertise() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        Technical Expertise
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-12 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Languages, frameworks, and technologies across embedded systems, AI/ML, cloud, and full-stack development. Proficiency levels reflect depth of experience and active use.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="border rounded-lg p-6 bg-white"
            variants={categoryVariants}
          >
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="space-y-3">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{Math.round(skill.level * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level * 100}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
