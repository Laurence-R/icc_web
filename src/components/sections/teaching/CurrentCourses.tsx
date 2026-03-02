"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  MapPin,
  ExternalLink,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import { currentCourses, type CurrentCourse } from "@/data/courses";

function CourseCard({
  course,
  index,
}: {
  course: CurrentCourse;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm transition-all hover:border-slate-300 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:shadow-xl dark:hover:shadow-blue-500/5">
        {/* Top accent gradient */}
        <div
          className={`h-1 bg-gradient-to-r ${course.color}`}
        />

        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${course.color} shadow-md`}
              >
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {course.name}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {course.code}
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold text-white ${course.type === "必修" ? "bg-rose-500" : "bg-blue-500"
                      }`}
                  >
                    {course.type}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {course.description}
          </p>

          {/* Schedule & Classroom */}
          <div className="mb-4 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-600 dark:border-white/5 dark:bg-white/5 dark:text-slate-400">
              <Clock className="h-3.5 w-3.5 text-blue-500" />
              {course.schedule}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-600 dark:border-white/5 dark:bg-white/5 dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-violet-500" />
              {course.classroom}
            </div>
          </div>

          {/* Expandable highlights */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
          >
            課程重點
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-1.5 pt-3">
                  {course.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${course.color}`}
                      />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Link */}
          {course.link && (
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${course.color} px-4 py-2.5 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90`}
            >
              進入課程網頁
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function CurrentCourses() {
  return (
    <div>
      {/* Stats bar */}
      <div className="mb-8 flex items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 dark:border-emerald-800/50 dark:bg-emerald-900/20">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
            114 學年度第 2 學期
          </span>
        </div>
        <span className="text-xs text-slate-400 dark:text-slate-500">
          共 {currentCourses.length} 門課程
        </span>
      </div>

      {currentCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center dark:border-white/10 dark:bg-white/[0.02]">
          <GraduationCap className="mb-3 h-10 w-10 text-slate-300 dark:text-slate-600" />
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            本學期課程資訊即將公告
          </p>
          <p className="mt-1 text-xs teㄉxt-slate-400 dark:text-slate-500">
            請稍後再回來查看
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {currentCourses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
