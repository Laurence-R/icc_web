"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    period: "2020-2026",
    title: "智慧車聯網與 AI 時代",
    description:
      "深度學習、強化學習、元學習在車聯網的應用；自注意力機制的任務卸載策略；邊緣計算與資源最佳化",
    highlights: ["深度強化學習", "自注意力機制", "元強化學習", "邊緣計算"],
  },
  {
    period: "2010-2019",
    title: "車聯網與智慧交通發展",
    description:
      "車載網路協定設計；GPS 導航與共乘系統；交通資訊散佈；延遲容忍網路研究",
    highlights: ["VANET", "GPS 導航", "共乘協定", "交通資訊系統"],
  },
  {
    period: "2005-2009",
    title: "行動網路與快速切換",
    description:
      "HCoP-B 快速切換機制（IEEE TVT 高影響力論文）；NEMO 架構設計；Mobile IP 研究",
    highlights: ["HCoP-B", "NEMO", "Fast Handoff", "Mobile IP"],
  },
  {
    period: "2000-2004",
    title: "無線網路與多媒體系統",
    description:
      "異質性網路整合；SIP 架構設計；多媒體同步技術；QoS 保證機制",
    highlights: ["SIP", "QoS", "多媒體同步", "網路整合"],
  },
  {
    period: "1994-1999",
    title: "多媒體協同工作系統",
    description:
      "CSCW 系統開發；遠距教學平台；Web-based 多媒體學習環境",
    highlights: ["CSCW", "遠距教學", "多媒體系統"],
  },
];

export default function ResearchTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        研究歷程
      </h2>
      <Card className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-2">
        <div className="space-y-8">
          {timeline.map((period, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative pl-8 border-l-4 border-blue-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>
              <div className="mb-2">
                <Badge className="bg-blue-600 text-white mb-2">
                  {period.period}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {period.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {period.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {period.highlights.map((highlight, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-blue-300 dark:border-blue-700"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
