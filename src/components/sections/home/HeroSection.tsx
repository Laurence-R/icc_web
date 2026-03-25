"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "@/components/ui/flip-words";

const flipWords = ["無線網路", "行動計算", "車載網路", "智慧車聯網", "共乘協定"];

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Spotlight */}
      <Spotlight />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-16 text-center">
        {/* Photo — transparent PNG with gradient aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-4"
        >
          {/* Animated glow ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-blue-400/30 via-violet-400/20 to-cyan-400/30 blur-2xl dark:from-blue-500/20 dark:via-violet-500/15 dark:to-cyan-500/20"
          />

          {/* Subtle inner ring */}
          <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-b from-blue-200/40 to-violet-200/40 blur-md dark:from-blue-400/10 dark:to-violet-400/10" />

          {/* Photo container — no clip, let the transparent silhouette breathe */}
          <div className="relative h-36 w-36 sm:h-40 sm:w-40 md:h-60 md:w-60">
            <Image
              src="/images/icc_hero.png"
              alt="張英超教授"
              fill={true}
              sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 240px"
              className="object-contain drop-shadow-lg dark:drop-shadow-[0_4px_24px_rgba(100,140,255,0.15)]"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          張英超
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2 text-lg font-light tracking-widest text-slate-400 dark:text-slate-500 sm:text-xl"
        >
          Ing-Chau Chang
        </motion.p>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:text-lg"
        >
          國立彰化師範大學 · 資訊工程學系 · 教授
        </motion.p>

        {/* FlipWords tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-300 sm:text-xl"
        >
          致力於
          <FlipWords
            words={flipWords}
            duration={2500}
            className="font-semibold text-blue-600 dark:text-blue-400"
          />
          之研究
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="my-5 h-px w-24 bg-slate-200 dark:bg-white/10"
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <Mail className="h-4 w-4" />
            聯絡我
          </a>

          <a
            href="https://ieeexplore.ieee.org/author/37640555800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <Image
              src="/IEEE_logo.svg"
              alt="IEEE"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            IEEE Xplore
            <ExternalLink className="h-3.5 w-3.5 opacity-40" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="group flex flex-col items-center gap-3 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          {/* Glowing mouse outline */}
          <div className="relative flex h-9 w-5.5 items-start justify-center rounded-full border-2 border-slate-300/70 p-1 dark:border-white/20">
            {/* Inner scroll dot */}
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-violet-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
            />
            {/* Glow behind mouse */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-b from-blue-400/10 to-violet-400/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/20 dark:to-violet-400/20" />
          </div>

          {/* Chevron arrows cascading */}
          <div className="flex flex-col items-center -space-y-1">
            <motion.svg
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 2, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              className="text-blue-400/70 dark:text-blue-400/50"
            >
              <path
                d="M1 1l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <motion.svg
              animate={{ opacity: [0.1, 0.5, 0.1], y: [0, 2, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              className="text-violet-400/60 dark:text-violet-400/40"
            >
              <path
                d="M1 1l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
