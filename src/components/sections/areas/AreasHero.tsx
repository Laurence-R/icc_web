"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function AreasHero() {
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
        <Globe className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        研究方向
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
        Research Areas
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        專注於車聯網、行動計算、人工智慧、雲端運算與無線網路技術的創新研究
      </p>
    </motion.div>
  );
}
