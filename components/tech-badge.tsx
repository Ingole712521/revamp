"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { getTechIcon } from "@/lib/icons"

export function TechBadge({ name }: { name: string }) {
  const iconUrl = getTechIcon(name)
  const isLocalIcon = iconUrl.startsWith('/')

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="pressable inline-flex cursor-default items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 motion-reduce:transform-none dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <span className="relative h-4 w-4 shrink-0">
        {isLocalIcon ? (
          <Image
            src={iconUrl}
            alt=""
            fill
            loading="lazy"
            sizes="16px"
            className="object-contain"
          />
        ) : (
          <img
            src={iconUrl}
            alt=""
            loading="lazy"
            decoding="async"
            width={16}
            height={16}
            className="h-full w-full object-contain"
          />
        )}
      </span>
      {name}
    </motion.span>
  )
}
