import AreasHero from "@/components/sections/areas/AreasHero";
import MainAreas from "@/components/sections/areas/MainAreas";
import ResearchTimeline from "@/components/sections/areas/ResearchTimeline";
import AreasStats from "@/components/sections/areas/AreasStats";

export default function ResearchAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <AreasHero />
        <MainAreas />
        <ResearchTimeline />
        <AreasStats />
      </div>
    </div>
  );
}
