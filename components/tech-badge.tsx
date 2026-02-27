"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { getTechIcon } from "@/lib/icons"

export function TechBadge({ name }: { name: string }) {
  const iconUrl = getTechIcon(name)
  const isLocalIcon = iconUrl.startsWith('/')

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-zinc-200 dark:border-white/10 rounded-full bg-zinc-50 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 transition-all cursor-default"
    >
      <span className="relative w-4 h-4 flex-shrink-0">
        {isLocalIcon ? (
          <Image
            src={iconUrl}
            alt={name}
            fill
            className="object-contain"
          />
        ) : (
          <img
            src={iconUrl}
            alt={name}
            className="w-full h-full object-contain"
          />
        )}
      </span>
      {name}
    </motion.span>
  )
}
