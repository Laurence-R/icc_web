"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProjectsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="inline-block mb-6"
      >
        <Briefcase className="h-16 w-16 text-green-600 dark:text-green-400" />
      </motion.div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
        研究計畫
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
        Research Projects
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        國科會計畫與大專生專題研究
      </p>
    </motion.div>
  );
}
