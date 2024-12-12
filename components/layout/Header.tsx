"use client";

import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

export function Header() {
  return (
    <motion.div 
      className="text-center mb-12"
      {...slideUp}
    >
      <div className="flex items-center justify-center space-x-3 mb-4">
        <Bot className="w-10 h-10 text-primary" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Grimm&apos;s AI Studio
        </h1>
        <Sparkles className="w-8 h-8 text-primary/60" />
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Create authentic, personality-driven content using advanced AI that understands
        your unique voice and style.
      </p>
    </motion.div>
  );
}