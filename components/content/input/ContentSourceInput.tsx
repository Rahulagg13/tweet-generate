"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { SourceUrlInputs } from "./SourceUrlInputs";
import { ContentBrief } from "./ContentBrief";
import { ContentSourceData } from "@/types/content";

interface ContentSourceInputProps {
  onGenerate: (data: ContentSourceData) => Promise<void>;
}

export function ContentSourceInput({ onGenerate }: ContentSourceInputProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onGenerate({
        twitterUrl: "",
        blogUrl: "",
        brief: ""
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div {...slideUp}>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <SourceUrlInputs />
            <ContentBrief />
          </div>

          <Button 
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Style & Generating Content...
              </>
            ) : (
              "Generate Authentic Content"
            )}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}