"use client";
import React from "react";
import { Card } from "@/components/ui/card";
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
    <Card
      className={`card no-inset no-ring ${className} shadow-none border border-border p-0`}
      style={{ borderRadius: "12px" }}
    >
      <div className="flex justify-between items-center border-b border-border px-6 py-4">
        <h5 className="text-xl font-semibold">{title}</h5>

        <Button className="flex items-center" onClick={onDownload}>
          <Download size={20} />
        </Button>
      </div>
      <div className="pt-4 p-6">{children}</div>
    </Card>
  );
};

export default TitleIconCard;
