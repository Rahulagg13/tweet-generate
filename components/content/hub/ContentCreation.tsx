"use client";

import { ContentSourceInput } from "../input/ContentSourceInput";
import { GeneratedContent } from "../output/GeneratedContent";

interface ContentCreationProps {
  onGenerate: (sourceData: any) => Promise<void>;
  generatedTweets: string[];
}

export function ContentCreation({ onGenerate, generatedTweets }: ContentCreationProps) {
  return (
    <div className="space-y-8">
      <ContentSourceInput onGenerate={onGenerate} />
      {generatedTweets.length > 0 && (
        <GeneratedContent content={generatedTweets} />
      )}
    </div>
  );
}