import LabHero from "@/components/sections/lab/LabHero";
import LabAbout from "@/components/sections/lab/LabAbout";
import LabFeatures from "@/components/sections/lab/LabFeatures";
import LabTopics from "@/components/sections/lab/LabTopics";
import LabAchievements from "@/components/sections/lab/LabAchievements";

export default function LabPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <LabHero />
                <LabAbout />
                <LabFeatures />
                <LabTopics />
                <LabAchievements />
            </div>
        </div>
    );
}
