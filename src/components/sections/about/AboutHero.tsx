"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 md:py-32">
      <Spotlight />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-5">
          {/* Text — 3 cols */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-sm font-medium tracking-widest text-blue-500 uppercase dark:text-blue-400"
            >
              About
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            >
              關於我
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="my-6 h-px w-16 origin-left bg-gradient-to-r from-blue-500 to-violet-500"
            />

            <TextGenerateEffect
              words="在學術研究的道路上，致力於無線網路與行動通訊領域的創新與發展。透過教學與研究，期望培養更多優秀的資訊人才，為科技進步貢獻一己之力。"
              className="text-base leading-relaxed text-slate-500 dark:text-slate-400"
              duration={0.3}
            />
          </div>

          {/* Photo — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:col-span-2"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-violet-500/15 to-cyan-500/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/50 p-1.5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/icc_photo_2.jpg"
                  alt="張英超教授"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
