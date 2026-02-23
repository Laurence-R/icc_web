"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Target, Award, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Lightbulb,
    title: "創新研究導向",
    description: "追求前沿技術突破，發表高影響力國際論文",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "團隊協作文化",
    description: "鼓勵跨域合作，培養獨立研究與團隊精神",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "理論實務並重",
    description: "從協定設計到系統實作，完整研發流程",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "卓越研究成果",
    description: "IEEE TVT、JMIR、Computers 等頂尖期刊論文",
    color: "from-purple-500 to-pink-500",
  },
];

export default function LabFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        實驗室特色
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <Card className="h-full text-center p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
