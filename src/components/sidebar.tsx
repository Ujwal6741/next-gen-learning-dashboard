"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutGrid, Settings, Sparkles, User } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "focus", label: "Focus", icon: Sparkles },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="hidden lg:flex lg:w-20 xl:w-72 flex-col border-r border-white/8 bg-white/[0.03] backdrop-blur-xl">
      <div className="flex items-center gap-3 px-4 py-5 xl:px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 shadow-glow">
          <Sparkles className="h-5 w-5 text-cyan-300" />
        </div>
        <div className="hidden xl:block">
          <p className="text-sm font-semibold text-white">NovaLearn</p>
          <p className="text-xs text-white/45">Student workspace</p>
        </div>
      </div>

      <nav aria-label="Primary" className="flex flex-1 flex-col gap-2 px-3 pb-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-left text-sm text-white/68 transition-colors hover:text-white focus:outline-none"
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-pill"
                  className="absolute inset-0 rounded-2xl bg-white/8"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Icon className="h-4 w-4" />
              </span>
              <span className="relative z-10 hidden xl:block">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto hidden xl:block px-5 pb-5">
        <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Today</p>
          <p className="mt-2 text-sm text-white/78">Keep the streak alive.</p>
        </div>
      </div>
    </aside>
  );
}
