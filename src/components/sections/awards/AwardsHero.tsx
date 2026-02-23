"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Crown, Sparkles } from "lucide-react";

export default function AwardsHero() {
  return (
    <>
      {/* Floating Award Icons Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-5">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10"
        >
          <Trophy className="h-24 w-24 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20"
        >
          <Medal className="h-32 w-32 text-orange-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-1/4"
        >
          <Star className="h-28 w-28 text-amber-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-40 right-1/3"
        >
          <Award className="h-36 w-36 text-yellow-600" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 right-10"
        >
          <Crown className="h-20 w-20 text-amber-600" />
        </motion.div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Trophy className="h-20 w-20 text-amber-600 dark:text-amber-400 relative z-10" />
          </div>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
          榮譽與獎項
          <span className="block text-2xl md:text-3xl bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent font-normal mt-2">
            Honors & Awards
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-500" />
          學術研究與教學卓越的肯定
          <Sparkles className="h-5 w-5 text-amber-500" />
        </p>
      </motion.div>
    </>
  );
}
