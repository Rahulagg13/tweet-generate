"use client";

import { ContentCreationHub } from "@/components/content/ContentCreationHub";
import { Header } from "@/components/layout/Header";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-radial from-background via-background/80 to-accent/20">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        <ContentCreationHub />
      </div>
    </main>
  );
}