"use client";

import { motion } from "framer-motion";
import { Folder, CheckCircle, Target, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mainProjects, studentProjects } from "@/data/projects";
import { useMemo } from "react";

export default function ProjectsStats() {
  const stats = useMemo(() => {
    const totalBudget = mainProjects.reduce(
      (sum, p) => sum + (p.budget || 0),
      0
    );
    return {
      total: mainProjects.length + studentProjects.length,
      main: mainProjects.length,
      student: studentProjects.length,
      totalBudget,
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="p-6 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                總計畫數
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                {stats.total}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
              <Folder className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="p-6 border-2 hover:border-green-300 dark:hover:border-green-700 transition-all shadow-lg hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                主持計畫
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
                {stats.main}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-xl">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="p-6 border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-lg hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                指導專題
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
                {stats.student}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
              <Target className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="p-6 border-2 hover:border-orange-300 dark:hover:border-orange-700 transition-all shadow-lg hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                總經費
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-300 bg-clip-text text-transparent">
                {(stats.totalBudget / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
              <DollarSign className="h-10 w-10 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
