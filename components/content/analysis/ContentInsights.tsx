"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { InsightsData } from "@/types/content";

interface ContentInsightsProps {
  insights: InsightsData;
}

export function ContentInsights({ insights }: ContentInsightsProps) {
  return (
    <motion.div {...slideUp}>
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Content Analysis</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Writing Tone</h4>
            <p className="text-lg">{insights.tone}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Topics</h4>
            <div className="flex flex-wrap gap-2">
              {insights.topics.map((topic, index) => (
                <Badge key={index} variant="secondary">{topic}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Writing Style</h4>
            <p className="text-lg">{insights.style}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}