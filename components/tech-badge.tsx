"use client"

import { motion } from "motion/react"

export function TechBadge({ name }: { name: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="inline-flex items-center px-3 py-1 text-sm font-medium border border-white/10 rounded-full bg-white/5 text-zinc-300 transition-all cursor-default"
    >
      {name}
    </motion.span>
  )
}
