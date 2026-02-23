import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsStats from "@/components/sections/projects/ProjectsStats";
import ProjectsContent from "@/components/sections/projects/ProjectsContent";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <ProjectsHero />
        <ProjectsStats />
        <ProjectsContent />
      </div>
    </div>
  );
}
