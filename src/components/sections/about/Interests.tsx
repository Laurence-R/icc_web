"use client";

import { motion } from "motion/react";
import { Mountain, Camera, Heart, Dribbble } from "lucide-react";
import { HoverEffect, type HoverEffectItem } from "@/components/ui/card-hover-effect";

const interests: HoverEffectItem[] = [
  {
    icon: Mountain,
    title: "登山健行",
    description: "享受大自然與山林之美",
    gradient: "from-emerald-500 to-teal-400",
    link: "#",
  },
  {
    icon: Camera,
    title: "攝影",
    description: "記錄生活中的美好瞬間",
    gradient: "from-amber-500 to-orange-400",
    link: "#",
  },
  {
    icon: Heart,
    title: "旅行",
    description: "探索不同文化與風景",
    gradient: "from-rose-500 to-pink-400",
    link: "#",
  },
  {
    icon: Dribbble,
    title: "籃球",
    description: "熱愛運動與團隊合作",
    gradient: "from-blue-500 to-cyan-400",
    link: "#",
  },
];

export function Interests() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            個人興趣
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Personal Interests
          </p>
        </motion.div>

        <HoverEffect items={interests} className="grid-cols-2 lg:grid-cols-4" />
      </div>
    </section>
  );
}
