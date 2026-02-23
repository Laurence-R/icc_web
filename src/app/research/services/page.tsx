"use client";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesStats from "@/components/sections/services/ServicesStats";
import ServiceSection from "@/components/sections/services/ServiceSection";
import {
  educationCourses,
  reviewServices,
  thesisCommittee,
  projectReview,
  otherServices,
} from "@/data/services";
import {
  BookOpen,
  FileCheck,
  GraduationCap,
  Trophy,
  Star,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <ServicesHero />
        <ServicesStats />

        <ServiceSection
          icon={BookOpen}
          iconBgFrom="from-blue-100 dark:from-blue-900/50"
          iconBgTo="to-blue-200 dark:to-blue-800/50"
          title="教育部課程計畫"
          subtitle="Ministry of Education Course Programs"
          titleGradient="from-blue-600 to-blue-400"
          borderColor="border-l-blue-500"
          hoverBorderColor="hover:border-blue-400"
          services={educationCourses}
          columns={2}
          animationDelay={0.4}
          badgeMode="year"
          badgeClassName="ml-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border-blue-300"
        />

        <ServiceSection
          icon={FileCheck}
          iconBgFrom="from-green-100 dark:from-green-900/50"
          iconBgTo="to-green-200 dark:to-green-800/50"
          title="論文審查與評審服務"
          subtitle="Peer Review Services"
          titleGradient="from-green-600 to-green-400"
          borderColor="border-l-green-500"
          hoverBorderColor="hover:border-green-400"
          services={reviewServices}
          columns={1}
          animationDelay={0.5}
          badgeMode="type"
          badgeClassName="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all"
        />

        <ServiceSection
          icon={GraduationCap}
          iconBgFrom="from-indigo-100 dark:from-indigo-900/50"
          iconBgTo="to-indigo-200 dark:to-indigo-800/50"
          title="學位口試委員"
          subtitle="Thesis Defense Committee"
          titleGradient="from-indigo-600 to-indigo-400"
          borderColor="border-l-indigo-500"
          hoverBorderColor="hover:border-indigo-400"
          services={thesisCommittee}
          columns={2}
          animationDelay={0.6}
          badgeMode="口試委員"
          badgeClassName="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 text-indigo-700 dark:text-indigo-300 border border-indigo-300"
        />

        <ServiceSection
          icon={Trophy}
          iconBgFrom="from-orange-100 dark:from-orange-900/50"
          iconBgTo="to-orange-200 dark:to-orange-800/50"
          title="專題競賽與成果評審"
          subtitle="Project Competition Review"
          titleGradient="from-orange-600 to-orange-400"
          borderColor="border-l-orange-500"
          hoverBorderColor="hover:border-orange-400"
          services={projectReview}
          columns={2}
          animationDelay={0.7}
          badgeMode="year"
          badgeClassName="ml-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 border-orange-300"
        />

        <ServiceSection
          icon={Star}
          iconBgFrom="from-pink-100 dark:from-pink-900/50"
          iconBgTo="to-pink-200 dark:to-pink-800/50"
          title="其他學術服務"
          subtitle="Other Academic Services"
          titleGradient="from-pink-600 to-pink-400"
          borderColor="border-l-pink-500"
          hoverBorderColor="hover:border-pink-400"
          services={otherServices}
          columns={2}
          animationDelay={0.8}
          badgeMode="year"
          badgeClassName="ml-2 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 text-pink-700 dark:text-pink-300 border-pink-300"
        />
      </div>
    </div>
  );
}
