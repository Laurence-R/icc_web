"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export function PublicationsHero() {
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
        <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
        論文著作
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
        Publications
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        期刊論文、國際會議論文與國內會議論文集
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-2xl mx-auto"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            💡 <span className="font-medium">完整資料查詢：</span>
            如需查看完整論文內容，請前往
            <a
              href="https://ieeexplore.ieee.org/author/37640555800"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-1"
            >
              IEEE Xplore
            </a>
            、
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium mx-1"
            >
              Google Scholar
            </a>
            或其他學術資料庫查詢。
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
