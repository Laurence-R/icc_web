"use client";

import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

export default function LabHero() {
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
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 dark:from-cyan-500/40 dark:via-blue-500/40 dark:to-purple-500/40 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <Wifi className="h-20 w-20 text-blue-600 dark:text-blue-400 relative z-10" />
        </div>
      </motion.div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
        無線與行動網路實驗室
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
        Wireless and Mobile Networks Laboratory
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        探索無線通訊與智慧網路的創新技術，培育新世代網路工程人才
      </p>
    </motion.div>
  );
}
