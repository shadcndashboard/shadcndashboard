"use client";

import { Card } from "@/components/ui/card";
import React from "react";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const OutlineCard: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card no-inset no-ring ${className} border border-ld`}>
      {children}
    </Card>
  );
};

export default OutlineCard;
