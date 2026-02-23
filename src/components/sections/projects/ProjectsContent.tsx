"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Folder,
  Calendar,
  DollarSign,
  Search,
  ChevronDown,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mainProjects, studentProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

/* ── Compact project row ──────────────────────────── */
function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const yearRange = `${project.startDate} – ${project.endDate}`;
  const isOngoing = project.status === "執行中";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200/60 bg-white transition-shadow hover:shadow-md dark:border-gray-700/40 dark:bg-gray-800/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30 sm:items-center"
      >
        <span className="mt-0.5 shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold tabular-nums text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 sm:mt-0">
          {project.startDate.split("/")[0]}
        </span>
        <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">
          {project.name}
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <Badge
            variant="secondary"
            className={`hidden text-[11px] sm:inline-flex ${project.type === "主持計畫"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : project.type === "指導專題"
                ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
                : ""
              }`}
          >
            {project.type}
          </Badge>
          {isOngoing && (
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
          )}
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <div className="border-t border-gray-100 px-4 py-3 text-sm dark:border-gray-700/40">
          <div className="grid gap-2 text-gray-600 dark:text-gray-400 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-emerald-500" />
              <span>{yearRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-3.5 w-3.5 text-blue-500" />
              <span>{project.agency}</span>
            </div>
            {project.projectNumber && (
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="text-xs font-medium text-gray-500">
                  計畫編號
                </span>
                <span className="font-mono text-xs">
                  {project.projectNumber}
                </span>
              </div>
            )}
            {project.budget && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-3.5 w-3.5 text-amber-500" />
                <span>NT$ {project.budget.toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Badge
                variant={isOngoing ? "default" : "outline"}
                className={`text-[10px] ${isOngoing ? "bg-orange-600" : ""}`}
              >
                {project.status}
              </Badge>
              <Badge variant="secondary" className="text-[10px] sm:hidden">
                {project.type}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Content: search + filter + list ─────────────── */
export default function ProjectsContent() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const allProjects = useMemo(() => [...mainProjects, ...studentProjects], []);

  const stats = useMemo(
    () => ({
      total: allProjects.length,
      main: mainProjects.length,
      student: studentProjects.length,
    }),
    [allProjects]
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allProjects.filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.agency.toLowerCase().includes(q) ||
        p.projectNumber.toLowerCase().includes(q);
      const matchType = selectedType === "all" || p.type === selectedType;
      return matchSearch && matchType;
    });
  }, [search, selectedType, allProjects]);

  const typeFilters = [
    { value: "all", label: "全部", count: stats.total },
    { value: "主持計畫", label: "主持計畫", count: stats.main },
    { value: "指導專題", label: "指導專題", count: stats.student },
  ];

  return (
    <>
      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-6 mb-8 border-2 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜尋計畫名稱、編號或機構…"
                className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {typeFilters.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setSelectedType(t.value)}
                  className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${selectedType === t.value
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                >
                  {t.label} ({t.count})
                </button>
              ))}
              <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                顯示 {filtered.length} / {stats.total} 筆
              </span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Project list */}
      <div
        className="space-y-2 overflow-y-auto pr-1"
        style={{ maxHeight: "65vh" }}
      >
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-gray-400 dark:text-gray-500">
            找不到符合條件的計畫
          </p>
        ) : (
          filtered.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))
        )}
      </div>
    </>
  );
}
