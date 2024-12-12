"use client";

import { Card } from "@/components/ui/card";
import { StyleSlider } from "./StyleSlider";

export function ContentStyleGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Style Preferences</h3>
      
      <div className="space-y-8">
        <StyleSlider
          label="Formality Level"
          leftLabel="Casual"
          rightLabel="Professional"
          defaultValue={50}
        />

        <StyleSlider
          label="Content Length"
          leftLabel="Concise"
          rightLabel="Detailed"
          defaultValue={70}
        />

        <StyleSlider
          label="Engagement Style"
          leftLabel="Informative"
          rightLabel="Interactive"
          defaultValue={60}
        />
      </div>
    </Card>
  );
}