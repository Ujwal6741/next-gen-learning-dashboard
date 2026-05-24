"use client";

import { motion } from "framer-motion";
import type { Course } from "@/lib/types";
import { resolveIcon } from "@/lib/icons";
import { useEffect, useState } from "react";

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(course.progress));
    return () => cancelAnimationFrame(raf);
  }, [course.progress]);

  const Icon = resolveIcon(course.icon_name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35, ease: "easeOut" }}
      whileHover={{
        scale: 1.015,
        y: -2,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] p-5 shadow-glow"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/7">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            {course.progress}%
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{course.title}</h3>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-white/45">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
