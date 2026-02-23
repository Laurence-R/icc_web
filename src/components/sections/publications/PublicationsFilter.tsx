"use client";

import { useMemo } from "react";
import { Search } from "lucide-react";
import { allPublications } from "@/data/publications";

export type PubTypeFilter =
  | "all"
  | "journal"
  | "international-conference"
  | "local-conference"
  | "thesis";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  type: PubTypeFilter;
  onTypeChange: (v: PubTypeFilter) => void;
  year: string;
  onYearChange: (v: string) => void;
  index: string;
  onIndexChange: (v: string) => void;
  resultCount: number;
  totalCount: number;
}

export function PublicationsFilter({
  search,
  onSearchChange,
  type,
  onTypeChange,
  year,
  onYearChange,
  index,
  onIndexChange,
  resultCount,
  totalCount,
}: Props) {
  const years = useMemo(() => {
    const s = new Set(allPublications.map((p) => p.year));
    return Array.from(s).sort((a, b) => b - a);
  }, []);

  const indexTypes = useMemo(() => {
    const s = new Set<string>();
    allPublications.forEach((p) => p.indexes?.forEach((i) => s.add(i)));
    return Array.from(s).sort();
  }, []);

  const hasFilter =
    search || type !== "all" || year !== "all" || index !== "all";

  const selectClass =
    "h-9 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 text-sm outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20";

  return (
    <div className="rounded-xl border-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 shadow-lg mb-8">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="搜尋標題、作者或期刊名稱…"
          className="h-10 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
        />
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            類型
          </span>
          <select
            value={type}
            onChange={(e) => onTypeChange(e.target.value as PubTypeFilter)}
            className={selectClass}
          >
            <option value="all">全部</option>
            <option value="journal">期刊論文</option>
            <option value="international-conference">國際會議</option>
            <option value="local-conference">國內會議</option>
            <option value="thesis">學位論文</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            年份
          </span>
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">全部</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            索引
          </span>
          <select
            value={index}
            onChange={(e) => onIndexChange(e.target.value)}
            className={selectClass}
          >
            <option value="all">全部</option>
            {indexTypes.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {hasFilter && (
          <button
            onClick={() => {
              onSearchChange("");
              onTypeChange("all");
              onYearChange("all");
              onIndexChange("all");
            }}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
          >
            重置篩選
          </button>
        )}

        <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">
          顯示 {resultCount} / {totalCount} 篇論文
        </span>
      </div>
    </div>
  );
}
