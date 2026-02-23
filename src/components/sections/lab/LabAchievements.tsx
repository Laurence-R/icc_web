"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  BookOpen,
  GraduationCap,
  MapPin,
  Mail,
  Cpu,
  Network,
  Zap,
} from "lucide-react";

const achievements = [
  { number: "182", label: "學術論文", description: "期刊與會議論文" },
  { number: "51", label: "期刊論文", description: "SCI/SCOPUS 收錄" },
  { number: "43", label: "研究計畫", description: "NSTC/NSC 計畫" },
  { number: "43", label: "榮譽獎項", description: "個人與指導學生" },
];

const labInfo = {
  location: "國立彰化師範大學 寶山校區 工學院大樓 E114",
  director: "張英超 教授",
  email: "icchang@cc.ncue.edu.tw",
  focus: "車聯網、人工智慧、行動計算、無線網路",
};

export default function LabAchievements() {
  return (
    <>
      {/* 研究成果統計 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          研究成果
        </h2>
        <Card className="p-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm opacity-80">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* 代表性研究成果 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          代表性研究成果
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  HCoP-B 快速切換機制
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  發表於 IEEE Transactions on Vehicular Technology (IF=7.1, Q1)
                </p>
                <Badge className="bg-blue-600">高引用論文</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  深度強化學習任務卸載
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  車聯網多準則決策與資源最佳化研究
                </p>
                <Badge className="bg-green-600">最新研究</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Network className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  車載網路路由協定
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  VANET、DTN、GPS 導航與交通資訊系統
                </p>
                <Badge className="bg-purple-600">應用導向</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  邊緣計算最佳化
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  自注意力機制元強化學習多任務卸載策略
                </p>
                <Badge className="bg-orange-600">執行中計畫</Badge>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* 聯絡資訊 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-2">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              聯絡資訊
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    實驗室位置
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {labInfo.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    指導教授
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {labInfo.director}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    聯絡信箱
                  </p>
                  <a
                    href={`mailto:${labInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {labInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    研究領域
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {labInfo.focus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              歡迎對無線網路、人工智慧、車聯網等領域有興趣的學生加入我們的研究團隊
            </p>
            <div className="flex justify-center gap-4">
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-600"
              >
                碩士班招生
              </Badge>
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                專題生歡迎
              </Badge>
              <Badge
                variant="outline"
                className="text-purple-600 border-purple-600"
              >
                研究助理
              </Badge>
            </div>
          </div>
        </Card>
      </motion.div>
    </>
  );
}
