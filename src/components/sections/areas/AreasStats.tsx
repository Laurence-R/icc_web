"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AreasStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">研究成果統計</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">182</div>
            <div className="text-sm opacity-90">學術論文</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">51</div>
            <div className="text-sm opacity-90">期刊論文</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">43</div>
            <div className="text-sm opacity-90">研究計畫</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-sm opacity-90">年研究經驗</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
