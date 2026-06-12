"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
const TitleCard: React.FC<MyAppProps> = ({ children, className, title }) => {
  return (
    <Card className={`card no-inset no-ring gap-0 ${className} shadow-none border border-border p-0`}>
      <CardHeader className="border-b border-border">
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default TitleCard;
