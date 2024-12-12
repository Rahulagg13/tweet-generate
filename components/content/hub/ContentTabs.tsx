"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentCreation } from "./ContentCreation";
import { ContentAnalysis } from "./ContentAnalysis";
import { ContentGenerationData } from "@/types/content";

interface ContentTabsProps {
  generatedContent: ContentGenerationData;
  onGenerate: (sourceData: any) => Promise<void>;
}

export function ContentTabs({ generatedContent, onGenerate }: ContentTabsProps) {
  return (
    <Tabs defaultValue="create" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="create">Create Content</TabsTrigger>
        <TabsTrigger value="analyze">Analyze & Refine</TabsTrigger>
      </TabsList>
      
      <TabsContent value="create">
        <ContentCreation 
          onGenerate={onGenerate}
          generatedTweets={generatedContent.tweets}
        />
      </TabsContent>
      
      <TabsContent value="analyze">
        <ContentAnalysis 
          styleGuideVisible={true}
          insights={generatedContent.insights}
        />
      </TabsContent>
    </Tabs>
  );
}