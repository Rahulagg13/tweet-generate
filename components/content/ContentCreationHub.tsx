"use client";

import { ContentTabs } from "./hub/ContentTabs";
import { useContentGeneration } from "@/lib/hooks/useContentGeneration";

export function ContentCreationHub() {
  const { generatedContent, generateContent } = useContentGeneration();

  return (
    <div className="space-y-8">
      <ContentTabs 
        generatedContent={generatedContent}
        onGenerate={generateContent}
      />
    </div>
  );
}