"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Network,
  Car,
  Brain,
  Wifi,
  Smartphone,
  CloudCog,
  type LucideIcon,
} from "lucide-react";

interface ResearchArea {
  title: string;
  titleEn: string;
  icon: LucideIcon;
  color: string;
  description: string;
  keywords: string[];
  relatedPublications: string;
  projects: string[];
}

const mainAreas: ResearchArea[] = [
  {
    title: "車聯網與智慧交通系統",
    titleEn: "Vehicular Networks & Intelligent Transportation",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    description:
      "車載行動網路 (VANET)、車聯網 (IoV) 架構設計、車輛通訊協定、智慧交通應用、GPS 導航系統、共乘協定與路徑規劃",
    keywords: [
      "VANET",
      "V2V/V2I",
      "車聯網",
      "智慧交通",
      "導航系統",
      "共乘協定",
      "延遲容忍網路 (DTN)",
    ],
    relatedPublications: "50+ 篇相關論文",
    projects: [
      "車聯網上基於自注意力機制之元強化學習多任務卸載策略 (2025-2026)",
      "車聯網上基於深度學習多準則決策之任務卸載策略 (2024-2025)",
      "車輛臨時網路中協同式交通資訊散佈之研究 (2010-2013)",
    ],
  },
  {
    title: "行動計算與無線網路",
    titleEn: "Mobile Computing & Wireless Networking",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description:
      "巢狀行動網路 (NEMO)、Mobile IP、快速切換機制 (HCoP-B)、異質性網路整合、垂直切換、跨層設計、行動多點傳送協定",
    keywords: [
      "NEMO",
      "Mobile IP",
      "HCoP-B",
      "Fast Handoff",
      "Vertical Handover",
      "異質網路整合",
      "MIPv6",
    ],
    relatedPublications: "40+ 篇相關論文",
    projects: [
      "HCoP-B: 快速切換機制研究 (IEEE Trans. Vehicular Technology, IF=7.1)",
      "異質性無線網路之行動管理與服務品質保證",
      "行動多點傳送協定設計與效能分析",
    ],
  },
  {
    title: "人工智慧與深度學習應用",
    titleEn: "AI & Deep Learning Applications",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    description:
      "深度學習、深度強化學習 (DRL)、元強化學習、自注意力機制、多準則決策、影像識別、電腦視覺、機器學習在網路中的應用",
    keywords: [
      "深度學習",
      "強化學習",
      "元學習",
      "Self-Attention",
      "影像識別",
      "電腦視覺",
      "神經網路",
    ],
    relatedPublications: "30+ 篇相關論文",
    projects: [
      "基於深度強化學習之多準則決策任務卸載",
      "自注意力機制在車聯網資源分配之應用",
      "深度學習於物體偵測與影像分析",
    ],
  },
  {
    title: "雲端運算與邊緣計算",
    titleEn: "Cloud & Edge Computing",
    icon: CloudCog,
    color: "from-green-500 to-emerald-500",
    description:
      "邊緣運算架構、任務卸載 (Task Offloading)、資源分配、計算卸載決策、MEC (Mobile Edge Computing)、霧計算、雲端服務最佳化",
    keywords: [
      "Edge Computing",
      "Task Offloading",
      "MEC",
      "資源分配",
      "計算卸載",
      "雲端架構",
    ],
    relatedPublications: "20+ 篇相關論文",
    projects: [
      "車聯網多任務卸載策略研究",
      "邊緣計算資源管理與最佳化",
      "分散式計算環境下的任務調度",
    ],
  },
  {
    title: "物聯網與感測網路",
    titleEn: "IoT & Sensor Networks",
    icon: Wifi,
    color: "from-indigo-500 to-blue-500",
    description:
      "物聯網 (IoT) 架構、無線感測網路 (WSN)、RFID 應用、智慧感測、資料收集與分析、低功耗網路協定",
    keywords: [
      "IoT",
      "WSN",
      "RFID",
      "感測器網路",
      "智慧感測",
      "資料收集",
    ],
    relatedPublications: "25+ 篇相關論文",
    projects: [
      "物聯網技術於智慧校園應用",
      "無線感測網路資料收集協定",
      "RFID 系統設計與應用",
    ],
  },
  {
    title: "網路協定與服務品質",
    titleEn: "Network Protocols & QoS",
    icon: Network,
    color: "from-yellow-500 to-amber-500",
    description:
      "網路協定設計、服務品質 (QoS) 保證、IntServ/DiffServ 整合、RSVP、SIP 架構、路由演算法、網路效能分析與最佳化",
    keywords: [
      "QoS",
      "IntServ",
      "DiffServ",
      "SIP",
      "路由協定",
      "網路最佳化",
    ],
    relatedPublications: "35+ 篇相關論文",
    projects: [
      "端對端 QoS 保證機制",
      "階層式 SIP 架構設計",
      "網路協定效能分析與模擬",
    ],
  },
];

export default function MainAreas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        主要研究領域
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mainAreas.map((area, index) => {
          const IconComponent = area.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-4 bg-gradient-to-br ${area.color} rounded-xl shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white">
                        {area.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {area.titleEn}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      關鍵技術：
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {area.relatedPublications}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <p className="font-medium mb-1">代表性研究：</p>
                      <ul className="space-y-1 pl-4">
                        {area.projects.slice(0, 2).map((project, i) => (
                          <li key={i} className="list-disc">
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
