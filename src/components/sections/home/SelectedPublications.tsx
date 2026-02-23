"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, FileText, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";

const publications = [
  {
    title:
      "HCoP-B: A Hierarchical Care-of Prefix with BUT Scheme for Nested Mobile Networks",
    authors: "Ing-Chau Chang and Chia-Hao Chou",
    venue: "IEEE Trans. on Vehicular Technology",
    volume: "58",
    issue: "6",
    pages: "2942-2965",
    year: 2009,
    impactFactor: "7.1",
    rank: "41/368, Q1 (Telecommunications)",
    type: "Journal",
    indexes: ["SCI"],
    nscProject: "NSC96-2221-E-018-009",
    links: {
      pdf: "#",
      doi: "https://ieeexplore.ieee.org/document/4711130",
    },
    tags: ["NEMO", "Nested Mobile Networks", "Handoff", "Telecommunications"],
  },
];

// Highlight author name
const highlightAuthor = (authors: string) => {
  const parts = authors.split(/(Ing-Chau Chang|張英超)/gi);
  return parts.map((part, index) => {
    if (part.match(/(Ing-Chau Chang|張英超)/i)) {
      return (
        <span
          key={index}
          className="font-bold text-blue-600 dark:text-blue-400"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export function SelectedPublications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-950" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
            代表性著作
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Selected Publications
          </h2>
          <TextGenerateEffect
            words="精選高影響力研究論文與學術貢獻"
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
            duration={0.3}
          />
        </motion.div>

        {/* Publication Cards with Tracing Beam */}
        <TracingBeam className="max-w-4xl">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                }}
              >
                <div
                  className={cn(
                    "rounded-2xl p-6 md:p-8",
                    "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
                    "border border-slate-200/60 dark:border-white/10",
                    "hover:border-blue-300/50 dark:hover:border-blue-500/20",
                    "transition-all duration-300",
                    "hover:shadow-lg hover:shadow-blue-500/5"
                  )}
                >
                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white">
                      期刊論文
                    </span>
                    {pub.indexes?.map((idx, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                      >
                        <Award className="h-3 w-3" />
                        {idx}
                      </span>
                    ))}
                    {pub.impactFactor && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 leading-tight">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-4">
                    {highlightAuthor(pub.authors)}
                  </p>

                  {/* Venue info */}
                  <div className="rounded-xl p-4 mb-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <FileText className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {pub.venue}
                      </span>
                      {pub.volume && (
                        <>
                          <span className="text-slate-300 dark:text-slate-600">
                            |
                          </span>
                          <span>
                            Vol.{pub.volume}, No.{pub.issue}
                          </span>
                        </>
                      )}
                      {pub.pages && (
                        <>
                          <span className="text-slate-300 dark:text-slate-600">
                            |
                          </span>
                          <span>pp.{pub.pages}</span>
                        </>
                      )}
                      <span className="text-slate-300 dark:text-slate-600">
                        |
                      </span>
                      <span>{pub.year}</span>
                    </div>

                    {pub.rank && (
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          Rank:
                        </span>{" "}
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {pub.rank}
                        </span>
                      </div>
                    )}

                    {pub.nscProject && (
                      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-medium">國科會計畫：</span>
                        {pub.nscProject}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons - using MovingBorder */}
                  <div className="flex gap-3">
                    <MovingBorderButton
                      borderRadius="0.75rem"
                      containerClassName="h-10 w-auto"
                      className="gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium px-4 border-0"
                      borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
                    >
                      <FileText className="h-4 w-4" />
                      PDF
                    </MovingBorderButton>

                    <MovingBorderButton
                      as="a"
                      href={pub.links.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      borderRadius="0.75rem"
                      containerClassName="h-10 w-auto"
                      className="gap-2 bg-white/80 dark:bg-gray-900/80 text-slate-700 dark:text-slate-200 text-sm font-medium px-4 border-slate-200/50 dark:border-white/10"
                      borderClassName="bg-[radial-gradient(#8b5cf6_40%,transparent_60%)]"
                      duration={4000}
                    >
                      <ExternalLink className="h-4 w-4" />
                      DOI
                    </MovingBorderButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/research/publications">
            <MovingBorderButton
              borderRadius="0.875rem"
              containerClassName="h-12 w-auto"
              className="gap-2 bg-white/80 dark:bg-gray-900/80 text-slate-700 dark:text-slate-200 font-medium px-6 border-slate-200/50 dark:border-white/10 group cursor-pointer"
              borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              duration={5000}
            >
              查看完整著作列表
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MovingBorderButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
