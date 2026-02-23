import { HeroSection } from "@/components/sections/home/HeroSection";
import { ResearchInterests } from "@/components/sections/home/ResearchInterests";
import { SelectedPublications } from "@/components/sections/home/SelectedPublications";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ResearchInterests />
        <SelectedPublications />
      </main>
    </div>
  );
}

