"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function LabAbout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-16"
    >
      <Card className="p-8 border-2 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            關於實驗室
          </h2>
        </div>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p className="text-lg">
            無線與行動網路實驗室成立於
            <strong className="text-blue-600 dark:text-blue-400">
              國立彰化師範大學資訊工程學系
            </strong>
            ，由
            <strong className="text-blue-600 dark:text-blue-400">
              張英超教授
            </strong>
            主持，專注於前沿網路技術的研究與創新應用開發。
          </p>
          <p>
            實驗室研究範疇涵蓋
            <strong>車聯網 (Vehicular Networks)</strong>、
            <strong>人工智慧 (AI/Deep Learning)</strong>、
            <strong>行動計算 (Mobile Computing)</strong>、
            <strong>邊緣計算 (Edge Computing)</strong>、
            <strong>無線網路 (Wireless Networks)</strong>{" "}
            等多個領域，致力於解決下世代網路通訊的關鍵技術挑戰。
          </p>
          <p>
            超過{" "}
            <strong className="text-blue-600 dark:text-blue-400">30 年</strong>{" "}
            的研究經驗，實驗室已發表{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              182 篇
            </strong>{" "}
            學術論文，執行{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              43 項
            </strong>{" "}
            國科會/科技部研究計畫，培育眾多碩博士研究生，多位畢業生已在學術界與產業界擔任重要職位。
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
