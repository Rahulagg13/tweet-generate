"use client";

import { useState } from "react";
import { ContentGenerationData, ContentSourceData } from "@/types/content";

const mockGenerateContent = async (): Promise<ContentGenerationData> => {
  return {
    tweets: [
      "🚀 Just shipped a game-changing feature in our web3 stack. The future of decentralized apps is all about user experience. Who's ready to build the next generation of the internet? #Web3 #Innovation",
      "💡 Key insight from today's founder chat: Success isn't just about the tech - it's about building genuine connections within your community. The best products solve real human problems.",
      "Hot take: The metaverse isn't just virtual reality - it's an extension of human creativity and connection. Building bridges between digital and physical worlds. Thoughts? 🌉 #FutureOfTech"
    ],
    insights: {
      tone: "Visionary and engaging",
      topics: ["Web3", "Innovation", "Community Building", "Technology"],
      style: "Professional yet approachable"
    }
  };
};

export function useContentGeneration() {
  const [generatedContent, setGeneratedContent] = useState<ContentGenerationData>({
    tweets: [],
    insights: { tone: "", topics: [], style: "" }
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = async (sourceData: ContentSourceData) => {
    setIsGenerating(true);
    try {
      const response = await mockGenerateContent();
      setGeneratedContent(response);
    } catch (error) {
      console.error("Failed to generate content:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generatedContent,
    isGenerating,
    generateContent
  };
}