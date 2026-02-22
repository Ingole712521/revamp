"use client"

import { Lamphome } from "@/components/ui/lamphome";
import { TechBadge } from "@/components/tech-badge";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { HERO, TECH_STACK, PROJECTS, EXPERIENCES, EDUCATION, NAVIGATION_LINKS } from "@/lib/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, FileText, Send } from "lucide-react";

export default function Home() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <Lamphome
        title=""
        description=""
        navItems={NAVIGATION_LINKS}
      >
        <div className="max-w-4xl w-full px-6 flex flex-col items-center">
          {/* ... Hero Section remains same ... */}
          <section className="flex flex-col items-center text-center mt-10 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 mb-8"
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src={HERO.avatar}
                alt={HERO.name}
                fill
                className="rounded-full border-4 border-zinc-200 dark:border-zinc-800 object-cover relative z-10"
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black z-20"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
            >
              {HERO.greet} <span className="text-zinc-500">{HERO.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8"
            >
              I {HERO.description}
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {TECH_STACK.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <FileText className="w-4 h-4" /> Resume / CV
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-lg shadow-white/5"
              >
                <Send className="w-4 h-4" /> Get in touch
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-12 text-zinc-400 dark:text-zinc-500"
            >
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full py-20 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    {imageErrors[project.id] ? (
                      <ProjectPlaceholder name={project.name} index={idx} />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={() => handleImageError(project.id)}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Link href={project.link} target="_blank" className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ... Rest of components ... */}

          {/* Experience Section */}
          <section id="work" className="w-full py-20 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Experience</h2>
            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{exp.title}</h3>
                      <span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">{exp.duration}</span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-500 font-medium mb-3">{exp.company}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="w-full py-20 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Education</h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
                    <span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">{edu.duration}</span>
                  </div>
                  <p className="text-zinc-500 dark:text-yellow-500 font-medium mb-3">{edu.degree}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full py-10 border-t border-zinc-100 dark:border-zinc-900 text-center">
            <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} {HERO.name}. Built with Next.js & ScrollX UI.</p>
          </footer>
        </div>
      </Lamphome>
    </main>
  );
}
