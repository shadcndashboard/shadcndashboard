"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import CodeDialog from "@/app/components/shared/CodeDialog";
import AnimatedCodeWrapper from "./AnimatedCodeWrapper";
import { cn } from "@/lib/utils";

type Props = {
  component: React.ReactNode; // Accept rendered element instead of function
  filePath: string;
  title?: string;
  subtitle?: string;
  isAnimated?: boolean;
  cssCode?: string;
  showReplayButton?: boolean;
  onReplay?: () => void;
  className?: string;
};

export default function CodePreview({
  component,
  filePath,
  title,
  subtitle,
  isAnimated,
  cssCode,
  showReplayButton,
  onReplay,
  className,
}: Props) {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`/api/code?file=${filePath}`)
      .then((res) => res.text())
      .then((text) => setCode(text))
      .catch((err) => console.error("Error loading code:", err));
  }, [filePath]);

  return (
    <Card className={cn("py-0!", className)}>
      <div className="h-full flex flex-col justify-between">
        <div className="p-6 flex flex-col gap-4">
          <div>
            {title && <h4 className="text-lg font-semibold">{title}</h4>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div>
            {component} {/* Already rendered element */}
          </div>
        </div>
        {isAnimated ? (
          <AnimatedCodeWrapper
            css={cssCode}
            showReplayButton={showReplayButton}
            onReplay={onReplay}
          >
            {code}
          </AnimatedCodeWrapper>
        ) : (
          <CodeDialog>{code}</CodeDialog>
        )}
      </div>
    </Card>
  );
}
