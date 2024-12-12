"use client";

import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import { Label } from "@/components/ui/label";

export function SourceUrlInputs() {
  return (
    <div>
      <Label className="flex items-center space-x-2 text-sm font-medium mb-2">
        <Link className="w-4 h-4" />
        <span>Content Sources</span>
      </Label>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Twitter Profile URL" />
        <Input placeholder="Blog URL" />
      </div>
    </div>
  );
}