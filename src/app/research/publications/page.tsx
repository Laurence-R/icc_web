"use client";

import { useState, useMemo } from "react";
import { PublicationsHero } from "@/components/sections/publications/PublicationsHero";
import { PublicationsStats } from "@/components/sections/publications/PublicationsStats";
import {
  PublicationsFilter,
  type PubTypeFilter,
} from "@/components/sections/publications/PublicationsFilter";
import { PublicationsList } from "@/components/sections/publications/PublicationsList";
import { allPublications } from "@/data/publications";

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<PubTypeFilter>("all");
  const [year, setYear] = useState("all");
  const [index, setIndex] = useState("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allPublications.filter((pub) => {
      const matchSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q);
      const matchType = type === "all" || pub.type === type;
      const matchYear = year === "all" || pub.year.toString() === year;
      const matchIndex = index === "all" || pub.indexes?.includes(index);
      return matchSearch && matchType && matchYear && matchIndex;
    });
  }, [search, type, year, index]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <PublicationsHero />
        <PublicationsStats />
        <PublicationsFilter
          search={search}
          onSearchChange={setSearch}
          type={type}
          onTypeChange={setType}
          year={year}
          onYearChange={setYear}
          index={index}
          onIndexChange={setIndex}
          resultCount={filtered.length}
          totalCount={allPublications.length}
        />
        <div className="mt-6">
          <PublicationsList publications={filtered} />
        </div>
      </div>
    </div>
  );
}
