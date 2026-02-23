"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Users, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalAwards, studentAwards, bestPaperAwards, allAwards } from "@/data/awards";

export default function AwardsStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              總獎項數
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {allAwards.length}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total Awards</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800 shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              個人獎項
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {personalAwards.length}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Personal Honors</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              指導學生獎項
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              {studentAwards.length}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Student Awards</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Trophy className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              最佳論文獎
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {bestPaperAwards.length}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Best Paper Awards</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
