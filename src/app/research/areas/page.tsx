"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Network,
  Radio,
  Car,
  Zap,
  Brain,
  Wifi,
  Globe,
  Database,
  Shield,
  Smartphone,
  CloudCog,
  Cpu
} from "lucide-react";

export default function ResearchAreasPage() {
  const mainAreas = [
    {
      title: "車聯網與智慧交通系統",
      titleEn: "Vehicular Networks & Intelligent Transportation",
      icon: Car,
      color: "from-blue-500 to-cyan-500",
      description: "車載行動網路 (VANET)、車聯網 (IoV) 架構設計、車輛通訊協定、智慧交通應用、GPS 導航系統、共乘協定與路徑規劃",
      keywords: ["VANET", "V2V/V2I", "車聯網", "智慧交通", "導航系統", "共乘協定", "延遲容忍網路 (DTN)"],
      relatedPublications: "50+ 篇相關論文",
      projects: [
        "車聯網上基於自注意力機制之元強化學習多任務卸載策略 (2025-2026)",
        "車聯網上基於深度學習多準則決策之任務卸載策略 (2024-2025)",
        "車輛臨時網路中協同式交通資訊散佈之研究 (2010-2013)"
      ]
    },
    {
      title: "行動計算與無線網路",
      titleEn: "Mobile Computing & Wireless Networking",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      description: "巢狀行動網路 (NEMO)、Mobile IP、快速切換機制 (HCoP-B)、異質性網路整合、垂直切換、跨層設計、行動多點傳送協定",
      keywords: ["NEMO", "Mobile IP", "HCoP-B", "Fast Handoff", "Vertical Handover", "異質網路整合", "MIPv6"],
      relatedPublications: "40+ 篇相關論文",
      projects: [
        "HCoP-B: 快速切換機制研究 (IEEE Trans. Vehicular Technology, IF=7.1)",
        "異質性無線網路之行動管理與服務品質保證",
        "行動多點傳送協定設計與效能分析"
      ]
    },
    {
      title: "人工智慧與深度學習應用",
      titleEn: "AI & Deep Learning Applications",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      description: "深度學習、深度強化學習 (DRL)、元強化學習、自注意力機制、多準則決策、影像識別、電腦視覺、機器學習在網路中的應用",
      keywords: ["深度學習", "強化學習", "元學習", "Self-Attention", "影像識別", "電腦視覺", "神經網路"],
      relatedPublications: "30+ 篇相關論文",
      projects: [
        "基於深度強化學習之多準則決策任務卸載",
        "自注意力機制在車聯網資源分配之應用",
        "深度學習於物體偵測與影像分析"
      ]
    },
    {
      title: "雲端運算與邊緣計算",
      titleEn: "Cloud & Edge Computing",
      icon: CloudCog,
      color: "from-green-500 to-emerald-500",
      description: "邊緣運算架構、任務卸載 (Task Offloading)、資源分配、計算卸載決策、MEC (Mobile Edge Computing)、霧計算、雲端服務最佳化",
      keywords: ["Edge Computing", "Task Offloading", "MEC", "資源分配", "計算卸載", "雲端架構"],
      relatedPublications: "20+ 篇相關論文",
      projects: [
        "車聯網多任務卸載策略研究",
        "邊緣計算資源管理與最佳化",
        "分散式計算環境下的任務調度"
      ]
    },
    {
      title: "物聯網與感測網路",
      titleEn: "IoT & Sensor Networks",
      icon: Wifi,
      color: "from-indigo-500 to-blue-500",
      description: "物聯網 (IoT) 架構、無線感測網路 (WSN)、RFID 應用、智慧感測、資料收集與分析、低功耗網路協定",
      keywords: ["IoT", "WSN", "RFID", "感測器網路", "智慧感測", "資料收集"],
      relatedPublications: "25+ 篇相關論文",
      projects: [
        "物聯網技術於智慧校園應用",
        "無線感測網路資料收集協定",
        "RFID 系統設計與應用"
      ]
    },
    {
      title: "網路協定與服務品質",
      titleEn: "Network Protocols & QoS",
      icon: Network,
      color: "from-yellow-500 to-amber-500",
      description: "網路協定設計、服務品質 (QoS) 保證、IntServ/DiffServ 整合、RSVP、SIP 架構、路由演算法、網路效能分析與最佳化",
      keywords: ["QoS", "IntServ", "DiffServ", "SIP", "路由協定", "網路最佳化"],
      relatedPublications: "35+ 篇相關論文",
      projects: [
        "端對端 QoS 保證機制",
        "階層式 SIP 架構設計",
        "網路協定效能分析與模擬"
      ]
    }
  ];

  const timeline = [
    {
      period: "2020-2026",
      title: "智慧車聯網與 AI 時代",
      description: "深度學習、強化學習、元學習在車聯網的應用；自注意力機制的任務卸載策略；邊緣計算與資源最佳化",
      highlights: ["深度強化學習", "自注意力機制", "元強化學習", "邊緣計算"]
    },
    {
      period: "2010-2019",
      title: "車聯網與智慧交通發展",
      description: "車載網路協定設計；GPS 導航與共乘系統；交通資訊散佈；延遲容忍網路研究",
      highlights: ["VANET", "GPS 導航", "共乘協定", "交通資訊系統"]
    },
    {
      period: "2005-2009",
      title: "行動網路與快速切換",
      description: "HCoP-B 快速切換機制（IEEE TVT 高影響力論文）；NEMO 架構設計；Mobile IP 研究",
      highlights: ["HCoP-B", "NEMO", "Fast Handoff", "Mobile IP"]
    },
    {
      period: "2000-2004",
      title: "無線網路與多媒體系統",
      description: "異質性網路整合；SIP 架構設計；多媒體同步技術；QoS 保證機制",
      highlights: ["SIP", "QoS", "多媒體同步", "網路整合"]
    },
    {
      period: "1994-1999",
      title: "多媒體協同工作系統",
      description: "CSCW 系統開發；遠距教學平台；Web-based 多媒體學習環境",
      highlights: ["CSCW", "遠距教學", "多媒體系統"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
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
            <Globe className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            研究方向
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
            Research Areas
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            專注於車聯網、行動計算、人工智慧、雲端運算與無線網路技術的創新研究
          </p>
        </motion.div>

        {/* 主要研究領域 */}
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
                        <div className={`p-4 bg-gradient-to-br ${area.color} rounded-xl shadow-lg`}>
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

        {/* 研究歷程時間軸 */}
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
                      <Badge key={i} variant="outline" className="border-blue-300 dark:border-blue-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 統計數據 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
      </div>
    </div>
  );
}
