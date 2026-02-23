"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
    {
        title: "HCoP-B: A Hierarchical Care-of Prefix with BUT Scheme for Nested Mobile Networks",
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
            doi: "#",
        },
        tags: ["NEMO", "Nested Mobile Networks", "Handoff", "Telecommunications"],
    },
];

// 高亮作者名稱
const highlightAuthor = (authors: string) => {
    const parts = authors.split(/(Ing-Chau Chang|張英超)/gi);
    return parts.map((part, index) => {
        if (part.match(/(Ing-Chau Chang|張英超)/i)) {
            return (
                <span key={index} className="font-bold text-blue-600 dark:text-blue-400">
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
            <div className="absolute inset-0 bg-white dark:bg-gray-900" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="orb-2 absolute top-0 right-1/4 w-64 h-64 rounded-full bg-violet-400/10 dark:bg-violet-500/5 blur-3xl" />
                <div className="orb-3 absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
                        代表性著作
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Selected Publications
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        精選高影響力研究論文與學術貢獻
                    </p>
                </motion.div>

                {/* Publication Cards */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.15 * index,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8">
                                {/* Badges row */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <Badge className="bg-blue-600/90 hover:bg-blue-600 text-white border-0">
                                        期刊論文
                                    </Badge>
                                    {pub.indexes?.map((idx, i) => (
                                        <Badge key={i} variant="outline" className="gap-1 glass-card border-slate-200 dark:border-white/10">
                                            <Award className="h-3 w-3" />
                                            {idx}
                                        </Badge>
                                    ))}
                                    {pub.impactFactor && (
                                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 gap-1">
                                            IF: {pub.impactFactor}
                                        </Badge>
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
                                <div className="glass-card rounded-xl p-4 mb-5">
                                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                                        <FileText className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">{pub.venue}</span>
                                        {pub.volume && (
                                            <>
                                                <span className="text-slate-300 dark:text-slate-600">|</span>
                                                <span>Vol.{pub.volume}, No.{pub.issue}</span>
                                            </>
                                        )}
                                        {pub.pages && (
                                            <>
                                                <span className="text-slate-300 dark:text-slate-600">|</span>
                                                <span>pp.{pub.pages}</span>
                                            </>
                                        )}
                                        <span className="text-slate-300 dark:text-slate-600">|</span>
                                        <span>{pub.year}</span>
                                    </div>

                                    {pub.rank && (
                                        <div className="mt-2 text-sm">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">Rank:</span>{" "}
                                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">{pub.rank}</span>
                                        </div>
                                    )}

                                    {pub.nscProject && (
                                        <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                            <span className="font-medium">國科會計畫：</span>{pub.nscProject}
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

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    <Button
                                        size="sm"
                                        className="gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 shadow-md shadow-blue-500/20"
                                    >
                                        <FileText className="h-4 w-4" />
                                        PDF
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="gap-2 cursor-pointer glass-card border-slate-200 dark:border-white/10"
                                        asChild
                                    >
                                        <a
                                            href="https://ieeexplore.ieee.org/document/4711130"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            DOI
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/research/publications">
                        <Button
                            variant="outline"
                            size="lg"
                            className="cursor-pointer glass-card glass-card-hover border-slate-200 dark:border-white/10 group gap-2"
                        >
                            查看完整著作列表
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
