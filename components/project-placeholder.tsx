"use client"

import { motion } from "motion/react"
import { Box, Code, Cpu, Database } from "lucide-react"

const icons = [Box, Code, Cpu, Database]

export function ProjectPlaceholder({ name, index }: { name: string, index: number }) {
  const Icon = icons[index % icons.length]

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-yellow-400 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[80px] animate-pulse delay-700"></div>
      </div>

      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 10, rotateX: 5 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="relative z-10 flex flex-col items-center gap-3"
      >
        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <Icon className="w-10 h-10 text-zinc-900 dark:text-white" />
        </div>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">System.initialize()</span>
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  )
}
