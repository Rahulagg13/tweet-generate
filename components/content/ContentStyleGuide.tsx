"use client";

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function ContentStyleGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Style Preferences</h3>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <Label>Formality Level</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Casual</span>
            <span>Professional</span>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Content Length</Label>
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Concise</span>
            <span>Detailed</span>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Engagement Style</Label>
          <Slider
            defaultValue={[60]}
            max={100}
            step={1}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Informative</span>
            <span>Interactive</span>
          </div>
        </div>
      </div>
    </Card>
  );
}