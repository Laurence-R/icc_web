"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cpu, Network, Wifi, Zap, type LucideIcon } from "lucide-react";

interface ResearchTopic {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
}

const researchTopics: ResearchTopic[] = [
  {
    icon: Cpu,
    title: "深度學習與人工智慧",
    items: [
      "深度強化學習 (DRL) 應用於資源分配",
      "自注意力機制 (Self-Attention) 多任務學習",
      "元強化學習 (Meta-RL) 策略設計",
      "電腦視覺與影像識別應用",
    ],
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Network,
    title: "車聯網與智慧交通",
    items: [
      "VANET 路由協定與通訊架構",
      "V2V/V2I 車輛通訊技術",
      "GPS 導航系統與共乘協定",
      "交通資訊散佈與延遲容忍網路",
    ],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Wifi,
    title: "行動網路與無線通訊",
    items: [
      "巢狀行動網路 (NEMO) 架構",
      "HCoP-B 快速切換機制",
      "Mobile IP 與異質網路整合",
      "垂直切換與跨層設計",
    ],
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Zap,
    title: "雲端與邊緣計算",
    items: [
      "任務卸載 (Task Offloading) 策略",
      "邊緣計算資源分配最佳化",
      "多準則決策系統設計",
      "分散式計算環境管理",
    ],
    color: "text-green-600 dark:text-green-400",
  },
];

export default function LabTopics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        主要研究主題
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchTopics.map((topic, index) => {
          const IconComponent = topic.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${topic.color}`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {topic.title}
                  </h3>
                </div>
                <Separator className="mb-4" />
                <ul className="space-y-2">
                  {topic.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Badge
                        variant="outline"
                        className="shrink-0 h-5 w-5 p-0 flex items-center justify-center"
                      >
                        {i + 1}
                      </Badge>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
