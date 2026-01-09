"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/expertise", label: "Expertise" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 border-b border-slate-700/40 bg-slate-800/70 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-slate-100">
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="text-xl tracking-tight">
            Creammiee
          </motion.span>
        </Link>

        <div className="flex gap-6 text-sm items-center">
          {links.map((l) => {
            const isActive = path === l.href;
            return (
              <Link key={l.href} href={l.href} className="relative inline-flex items-center">
                <motion.span
                  className={`px-1 ${isActive ? "text-cyan-300 font-semibold" : "text-slate-200"}`}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {l.label}
                </motion.span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-3 left-0 right-0 h-0.5 bg-cyan-300 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
