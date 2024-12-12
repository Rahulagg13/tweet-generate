"use client";

import { ContentStyleGuide } from "../style/ContentStyleGuide";
import { ContentInsights } from "../analysis/ContentInsights";
import { InsightsData } from "@/types/content";

interface ContentAnalysisProps {
  styleGuideVisible: boolean;
  insights: InsightsData;
}

export function ContentAnalysis({ styleGuideVisible, insights }: ContentAnalysisProps) {
  return (
    <div className="space-y-8">
      {styleGuideVisible && <ContentStyleGuide />}
      {insights.tone && <ContentInsights insights={insights} />}
    </div>
  );
}