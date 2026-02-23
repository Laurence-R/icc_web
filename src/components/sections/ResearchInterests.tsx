"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Wifi, Car, Radio } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import type { HoverEffectItem } from "@/components/ui/card-hover-effect";

const interests: HoverEffectItem[] = [
  {
    icon: Wifi,
    title: "Mobile Computing and Wireless Networking",
    description: "行動計算與無線網路",
    details:
      "研究行動裝置之計算與資源管理、無線網路協定設計及效能優化，提升無線通訊效率與可靠性。",
    gradient: "from-blue-500 to-cyan-400",
    link: "/research/areas",
  },
  {
    icon: Car,
    title: "Vehicle Navigation, Carpooling Protocols and Applications",
    description: "車輛導航、共乘協定與應用",
    details:
      "開發智慧車輛導航系統與共乘配對演算法，結合即時交通資訊提供最佳路徑規劃與乘車配對服務。",
    gradient: "from-emerald-500 to-teal-400",
    link: "/research/areas",
  },
  {
    icon: Radio,
    title: "Vehicular Ad Hoc Network",
    description: "車載行動網路",
    details:
      "研究車載隨意網路中的通訊協定、資料傳遞與安全機制，促進車間通訊的效能與穩定性。",
    gradient: "from-orange-500 to-amber-400",
    link: "/research/areas",
  },
];

export function ResearchInterests() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
            研究領域
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Research Interests
          </h2>
          <TextGenerateEffect
            words="探索無線網路與行動通訊的前沿技術，致力於提升網路效能與安全性"
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
            duration={0.3}
          />
        </motion.div>

        {/* Cards - Aceternity HoverEffect component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HoverEffect
            items={interests}
            layoutId="researchHoverBg"
            className="grid-cols-1 md:grid-cols-3 py-0 gap-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
