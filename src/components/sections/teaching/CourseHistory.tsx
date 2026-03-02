"use client";

import { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { courseHistory } from "@/data/courses";

export function CourseHistory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "必修" | "選修">("all");
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      courseHistory
        .map((sem) => ({
          ...sem,
          courses: sem.courses.filter((c) => {
            const matchSearch = c.name
              .toLowerCase()
              .includes(search.toLowerCase());
            const matchFilter = filter === "all" || c.type === filter;
            return matchSearch && matchFilter;
          }),
        }))
        .filter((sem) => sem.courses.length > 0),
    [search, filter]
  );

  const totalCourses = courseHistory.reduce(
    (a, s) => a + s.courses.length,
    0
  );
  const years = new Set(courseHistory.map((s) => s.year)).size;

  return (
    <div>
      {/* Stats */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          {years} 個學年
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          累計 {totalCourses} 門課程
        </span>
      </div>

      {/* Search & filter */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜尋課程名稱…"
            className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-500"
          />
        </div>
        <div className="flex gap-1.5">
          {(["all", "必修", "選修"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-all cursor-pointer ${filter === t
                ? "bg-slate-900 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                }`}
            >
              {t === "all" ? "全部" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-5">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-400 via-violet-400 to-slate-200 dark:from-blue-600 dark:via-violet-600 dark:to-slate-800" />

        <div className="space-y-4">
          {filtered.map((sem, idx) => {
            const key = `${sem.year}-${sem.semester}`;
            const isOpen = expandedKey === key;

            return (
              <div
                key={key}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                style={{ animationDelay: `${idx * 30}ms`, animationFillMode: "both" }}
              >
                {/* Dot */}
                <div className="absolute left-0 mt-3 h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-violet-500 shadow dark:border-gray-950" />

                {/* Card */}
                <div className="ml-4 overflow-hidden rounded-xl border border-slate-200/60 bg-white dark:border-white/5 dark:bg-white/[0.03]">
                  {/* Header */}
                  <button
                    onClick={() =>
                      setExpandedKey(isOpen ? null : key)
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {sem.year} 學年度
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        第 {sem.semester} 學期
                      </span>
                      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                        {sem.courses.length} 門
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Courses */}
                  {isOpen && (
                    <div className="overflow-hidden">
                      <div className="space-y-1 border-t border-slate-100 px-4 py-3 dark:border-white/5">
                        {sem.courses.map((course, ci) => (
                          <a
                            key={ci}
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/row flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                          >
                            <div className="flex items-center gap-3">
                              <GraduationCap className="h-4 w-4 flex-shrink-0 text-slate-400 transition-colors group-hover/row:text-blue-500" />
                              <div>
                                <span className="text-sm font-medium text-slate-800 transition-colors group-hover/row:text-blue-600 dark:text-slate-200 dark:group-hover/row:text-blue-400">
                                  {course.name}
                                </span>
                                <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
                                  {course.code}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-shrink-0 items-center gap-2">
                              <span
                                className={`rounded px-2 py-0.5 text-[10px] font-semibold text-white ${
                                  course.type === "必修"
                                    ? "bg-rose-500"
                                    : "bg-blue-500"
                                }`}
                              >
                                {course.type}
                              </span>
                              <ExternalLink className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/row:text-blue-400 dark:text-slate-600" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
          找不到符合條件的課程 = w =
        </p>
      )}
    </div>
  );
}
