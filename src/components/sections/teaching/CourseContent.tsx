"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CourseHistory } from "@/components/sections/teaching/CourseHistory";
import { CurrentCourses } from "@/components/sections/teaching/CurrentCourses";

const TABS = [
  { title: "目前課程", value: "current" },
  { title: "歷年課程", value: "history" },
] as const;

type TabValue = (typeof TABS)[number]["value"];

export function CourseContent() {
  const [active, setActive] = useState<TabValue>("current");

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="relative mb-8 flex w-fit gap-1 rounded-xl border border-slate-200/70 bg-slate-100/60 p-1 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className="relative rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none"
          >
            {active === tab.value && (
              <motion.span
                layoutId="tab-pill"
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-white/10"
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                active === tab.value
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content — height determined by content itself */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          {active === "current" ? <CurrentCourses /> : <CourseHistory />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}