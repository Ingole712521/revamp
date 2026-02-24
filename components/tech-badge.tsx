"use client"

import { motion } from "motion/react"
import { getTechIcon } from "@/lib/icons"

export function TechBadge({ name }: { name: string }) {
  const icon = getTechIcon(name);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-zinc-200 dark:border-white/10 rounded-full bg-zinc-50 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 transition-all cursor-default"
    >
      <img src={icon} alt={name} className="w-3.5 h-3.5 object-contain" />
      {name}
    </motion.span>
  )
}
