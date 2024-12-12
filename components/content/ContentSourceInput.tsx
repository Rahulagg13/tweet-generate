"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCw, Link, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

export function ContentSourceInput({ onGenerate }: { onGenerate: (data: any) => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onGenerate({});
      setLoading(false);
    }, 2000);
  };

  return (
    <motion.div {...slideUp}>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                <Link className="w-4 h-4" />
                <span>Content Sources</span>
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="Twitter Profile URL" />
                <Input placeholder="Blog URL" />
              </div>
            </div>
            
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Content Brief</span>
              </label>
              <Textarea 
                placeholder="Describe the type of content you want to generate..."
                className="min-h-[100px]"
              />
            </div>
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