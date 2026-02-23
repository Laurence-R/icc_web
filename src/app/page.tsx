import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { SelectedPublications } from "@/components/sections/SelectedPublications";

export default function Home() {
    return (
        <div className="min-h-screen">
            <main>
                <HeroSection />
                <div className="section-divider" />
                <ResearchInterests />
                <div className="section-divider" />
                <SelectedPublications />
            </main>
        </div>
    );
}

