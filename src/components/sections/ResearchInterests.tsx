"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Car, Radio } from "lucide-react";

const interests = [
    {
        icon: Wifi,
        title: "Mobile Computing and Wireless Networking",
        description: "行動計算與無線網路",
        gradient: "from-blue-500 to-cyan-400",
        bgGlow: "bg-blue-500/10 dark:bg-blue-400/5",
    },
    {
        icon: Car,
        title: "Vehicle Navigation, Carpooling Protocols and Applications",
        description: "車輛導航、共乘協定與應用",
        gradient: "from-emerald-500 to-teal-400",
        bgGlow: "bg-emerald-500/10 dark:bg-emerald-400/5",
    },
    {
        icon: Radio,
        title: "Vehicular Ad Hoc Network",
        description: "車載行動網路",
        gradient: "from-orange-500 to-amber-400",
        bgGlow: "bg-orange-500/10 dark:bg-orange-400/5",
    },
];

export function ResearchInterests() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-50/80 dark:bg-gray-950/80" />
            <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

            <div className="container relative mx-auto px-4" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
                        研究領域
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Research Interests
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        探索無線網路與行動通訊的前沿技術，致力於提升網路效能與安全性
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {interests.map((interest, index) => (
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
                            <div className="group relative glass-card glass-card-hover rounded-2xl p-8 h-full cursor-default">
                                {/* Subtle gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl ${interest.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative space-y-5">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                                        <interest.icon className="h-7 w-7 text-white" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight">
                                            {interest.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400">
                                            {interest.description}
                                        </p>
                                    </div>

                                    {/* Decorative line */}
                                    <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${interest.gradient} opacity-50 group-hover:w-20 transition-all duration-500`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
