"use client";

import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { Label } from "@/components/ui/label";

export function ContentBrief() {
  return (
    <div>
      <Label className="flex items-center space-x-2 text-sm font-medium mb-2">
        <MessageSquare className="w-4 h-4" />
        <span>Content Brief</span>
      </Label>
      <Textarea 
        placeholder="Describe the type of content you want to generate..."
        className="min-h-[100px]"
      />
    </div>
  );
}