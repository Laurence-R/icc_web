import AwardsHero from "@/components/sections/awards/AwardsHero";
import AwardsStats from "@/components/sections/awards/AwardsStats";
import AwardsList from "@/components/sections/awards/AwardsList";

export default function AwardsPage() {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 relative z-10">
                <AwardsHero />
                <AwardsStats />
                <AwardsList />
            </div>
        </div>
    );
}
