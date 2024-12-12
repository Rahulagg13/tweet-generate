"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Twitter, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideInLeft } from "@/lib/animations";

export function GeneratedContent({ content }: { content: string[] }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      className="space-y-6"
      {...fadeIn}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Twitter className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Generated Content</h2>
        </div>
      </div>

      <div className="space-y-4">
        {content.map((tweet, index) => (
          <motion.div
            key={index}
            {...slideInLeft}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 relative group hover:shadow-lg transition-shadow">
              <p className="pr-24 text-lg">{tweet}</p>
              <div className="absolute right-2 top-2 flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(tweet)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}