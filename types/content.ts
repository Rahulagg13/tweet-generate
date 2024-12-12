export interface InsightsData {
  tone: string;
  topics: string[];
  style: string;
}

export interface ContentGenerationData {
  tweets: string[];
  insights: InsightsData;
}

export interface ContentSourceData {
  twitterUrl?: string;
  blogUrl?: string;
  brief?: string;
}