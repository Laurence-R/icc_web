"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users, Medal, Star, Crown, Gift, Target, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { personalAwards, studentAwards, bestPaperAwards } from "@/data/awards";

export default function AwardsList() {
  return (
    <>
      {/* Personal Awards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">個人獎項</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Personal Honors</p>
          </div>
          <div className="flex-1"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Medal className="h-8 w-8 text-green-500 opacity-30" />
          </motion.div>
        </div>
        <Separator className="mb-6 bg-gradient-to-r from-transparent via-green-300 to-transparent h-0.5" />
        <div className="space-y-4">
          {personalAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 flex items-start gap-3">
                      <div className="mt-1">
                        <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {award.title}
                        </CardTitle>
                        <CardDescription>
                          {award.organization}
                          {award.description && ` • ${award.description}`}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0 border-green-300 dark:border-green-700">
                      {award.year}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Student Awards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">指導學生獎項</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Student Achievements</p>
          </div>
          <div className="flex-1"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Target className="h-8 w-8 text-purple-500 opacity-30" />
          </motion.div>
        </div>
        <Separator className="mb-6 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-0.5" />
        <div className="space-y-4">
          {studentAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 flex items-start gap-3">
                      <div className="mt-1">
                        <Gift className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {award.title}
                        </CardTitle>
                        <CardDescription className="text-sm">{award.organization}</CardDescription>
                        {award.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            {award.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0 border-purple-300 dark:border-purple-700">
                      {award.year}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Best Paper Awards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg relative">
            <Trophy className="h-8 w-8 text-white relative z-10" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-orange-400 rounded-xl opacity-30"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">最佳論文獎</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Best Paper Awards</p>
          </div>
          <div className="flex-1"></div>
          <motion.div
            animate={{ rotate: [0, 20, 0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Zap className="h-8 w-8 text-orange-500 opacity-30" />
          </motion.div>
        </div>
        <Separator className="mb-6 bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
        <div className="space-y-4">
          {bestPaperAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-500 group relative overflow-hidden bg-gradient-to-r from-orange-50/50 to-white dark:from-orange-900/10 dark:to-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Trophy className="h-24 w-24 text-orange-500 transform rotate-12" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 flex items-start gap-3">
                      <div className="mt-1 relative">
                        <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-50"></div>
                        <Crown className="h-6 w-6 text-orange-600 dark:text-orange-400 relative z-10" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-bold">
                          {award.title}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium">
                          {award.organization}
                        </CardDescription>
                        {award.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            {award.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="shrink-0 bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0 shadow-md">
                        {award.year}
                      </Badge>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <Medal className="h-5 w-5 text-orange-500" />
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
