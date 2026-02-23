"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, BookOpen, Briefcase, Award, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    {
        icon: BookOpen,
        value: "182",
        label: "學術論文",
        sublabel: "Publications",
        color: "from-blue-500 to-cyan-400",
    },
    {
        icon: Briefcase,
        value: "43",
        label: "研究計畫",
        sublabel: "Projects",
        color: "from-violet-500 to-purple-400",
    },
    {
        icon: Award,
        value: "43",
        label: "榮譽獎項",
        sublabel: "Awards",
        color: "from-amber-500 to-orange-400",
    },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="orb-1 absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl" />
                <div className="orb-2 absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-violet-400/15 dark:bg-violet-500/10 blur-3xl" />
                <div className="orb-3 absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-cyan-400/15 dark:bg-cyan-500/8 blur-3xl" />
                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container relative mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36">
                <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
                    {/* Left side - Text content (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3 space-y-8"
                    >
                        {/* Title badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-blue-700 dark:text-blue-300">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                教授 Professor
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-3"
                        >
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                                張英超
                            </h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-500 dark:text-slate-400 tracking-wide">
                                Ing-Chau Chang
                            </p>
                        </motion.div>

                        {/* Department */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                                國立彰化師範大學 資訊工程學系
                            </p>
                        </motion.div>

                        {/* Quote with glass accent */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="glass-card rounded-xl p-5">
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed pl-4 italic">
                                    「致力於智慧車聯網技術與創新應用之研究與發展。」
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <Button
                                size="lg"
                                className="gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/15 border-0 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
                                asChild
                            >
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email 聯絡
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 cursor-pointer glass-card glass-card-hover border-slate-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/30"
                                asChild
                            >
                                <a
                                    href="https://ieeexplore.ieee.org/author/37640555800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/IEEE_logo.svg"
                                        alt="IEEE"
                                        width={28}
                                        height={28}
                                        className="h-7 w-7"
                                    />
                                    IEEE Xplore
                                    <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                                </a>
                            </Button>
                        </motion.div>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col gap-3 pt-2 text-sm text-slate-500 dark:text-slate-400"
                        >
                            <div className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-blue-500" />
                                <span>icchang@cc.ncue.edu.tw</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <MapPin className="h-4 w-4 text-violet-500" />
                                <span>研究室：寶山校區 工學院大樓 E136</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <MapPin className="h-4 w-4 text-cyan-500" />
                                <span>實驗室：無線與行動網路實驗室 E114</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Photo (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-2 relative"
                    >
                        <div className="relative max-w-sm mx-auto">
                            {/* Decorative glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 dark:opacity-40" />
                            {/* Glass frame */}
                            <div className="relative glass-card rounded-2xl p-2 overflow-hidden">
                                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                                    <Image
                                        src="/images/icc_photo.jpg"
                                        alt="張英超教授"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Bottom glass overlay with name */}
                                <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-4 border border-white/30 dark:border-white/5">
                                    <p className="font-bold text-slate-900 dark:text-white text-lg">張英超 教授</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">彰化師大 資工系</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                            className="group glass-card glass-card-hover rounded-2xl p-6 cursor-default"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    {stat.sublabel}
                                </span>
                            </div>
                            <div className="stat-glow text-4xl font-bold text-slate-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex justify-center mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <ArrowDown className="h-4 w-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
