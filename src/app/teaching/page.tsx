"use client";

import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Tabs } from "@/components/ui/tabs";
import { CurrentCourses } from "@/components/sections/teaching/CurrentCourses";
import { CourseHistory } from "@/components/sections/teaching/CourseHistory";

const tabs = [
  {
    title: "目前課程",
    value: "current",
    content: (
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-950/90 sm:p-8">
        <CurrentCourses />
      </div>
    ),
  },
  {
    title: "歷年課程",
    value: "history",
    content: (
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-950/90 sm:p-8">
        <CourseHistory />
      </div>
    ),
  },
];

export default function TeachingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Spotlight />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-medium tracking-widest text-blue-500 uppercase dark:text-blue-400"
          >
            Teaching
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            教學
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-blue-500 to-violet-500"
          />

          <TextGenerateEffect
            words="分享專業知識，培育資訊人才，致力於電腦網路、物聯網與無線通訊領域的教學實踐。"
            className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400"
            duration={0.3}
          />
        </div>
      </section>

      {/* Tabs section */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <Tabs
          tabs={tabs}
          containerClassName="justify-center mb-8"
          tabClassName="text-sm font-medium px-5 py-2"
          activeTabClassName="bg-gradient-to-r from-blue-500/10 to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20"
          contentClassName="mt-6"
          contentMaxHeight="65vh"
        />
      </section>
    </div>
  );
}
