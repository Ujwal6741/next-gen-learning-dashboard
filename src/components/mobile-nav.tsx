"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutGrid, User } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "dashboard", label: "Home", icon: LayoutGrid },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "profile", label: "Profile", icon: User }
];

export function MobileNav() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-3 py-3 backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className="relative flex min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl px-3 py-3 text-sm text-white/72"
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-pill"
                  className="absolute inset-0 rounded-2xl bg-white/8"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">
                <Icon className="h-4 w-4" />
              </span>
              <span className="relative z-10 hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
