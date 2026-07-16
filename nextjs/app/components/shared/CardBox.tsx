"use client";

import { Card } from "@/components/ui/card";
import React from "react";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card
      className={`card no-inset no-ring ${className} shadow-none border border-border`}
      style={{ borderRadius: "12px" }}
    >
      {children}
    </Card>
  );
};

export default CardBox;
