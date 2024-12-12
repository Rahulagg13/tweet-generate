"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface StyleSliderProps {
  label: string;
  leftLabel: string;
  rightLabel: string;
  defaultValue: number;
}

export function StyleSlider({ label, leftLabel, rightLabel, defaultValue }: StyleSliderProps) {
  return (
    <div className="space-y-4">
      <Label>{label}</Label>
      <Slider
        defaultValue={[defaultValue]}
        max={100}
        step={1}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}