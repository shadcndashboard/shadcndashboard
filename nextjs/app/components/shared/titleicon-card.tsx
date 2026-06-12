"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleIconCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
  onDownload,
}) => {
  return (
    <Card className={`card no-inset no-ring gap-0 ${className} shadow-none border p-0`}>
      <CardHeader className="p-0 border-b">
        <div className="flex justify-between items-center">
          <CardTitle>
            <span>{title}</span>
          </CardTitle>
          <Button className="flex items-center border border-border" variant={"ghost"} onClick={onDownload}>
            <Download size={20} />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default TitleIconCard;
