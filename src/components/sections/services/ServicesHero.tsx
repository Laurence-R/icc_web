"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ServicesHero() {
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
        <Award className="h-16 w-16 text-purple-600 dark:text-purple-400" />
      </motion.div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
        學術服務
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
        Academic Services
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        論文審查、教育課程、口試委員與專題評審
      </p>
    </motion.div>
  );
}
