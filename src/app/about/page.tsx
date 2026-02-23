"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { Timeline } from "@/components/sections/about/Timeline";
import { Interests } from "@/components/sections/about/Interests";
import { ContactInfo } from "@/components/sections/about/ContactInfo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <AboutHero />
      <Timeline />
      <Interests />
      <ContactInfo />
    </div>
  );
}
