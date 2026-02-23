"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Award,
  BookOpen,
  Globe,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { allPublications } from "@/data/publications";

export function PublicationsStats() {
  const stats = useMemo(() => {
    const years = new Set(allPublications.map((p) => p.year));
    const journalCount = allPublications.filter((p) => p.type === "journal").length;
    const intlConf = allPublications.filter((p) => p.type === "international-conference").length;
    const localConf = allPublications.filter((p) => p.type === "local-conference").length;
    const sciCount = allPublications.filter((p) =>
      p.indexes?.some((idx) => idx === "SCI" || idx === "SCIE")
    ).length;
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return { total: allPublications.length, journalCount, intlConf, localConf, sciCount, years: `${minYear} - ${maxYear}` };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
    >
      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg hover:shadow-xl">
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">總論文數</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {stats.total}
          </p>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-lg hover:shadow-xl">
          <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">期刊論文</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            {stats.journalCount}
          </p>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-green-300 dark:hover:border-green-700 transition-all shadow-lg hover:shadow-xl">
          <Globe className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">國際會議</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            {stats.intlConf}
          </p>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-lg hover:shadow-xl">
          <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">國內會議</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            {stats.localConf}
          </p>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-orange-300 dark:hover:border-orange-700 transition-all shadow-lg hover:shadow-xl">
          <Award className="h-5 w-5 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">SCI/SCIE</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {stats.sciCount}
          </p>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="p-4 text-center border-2 h-45 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-lg hover:shadow-xl">
          <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">研究年限</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {stats.years}
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
}
