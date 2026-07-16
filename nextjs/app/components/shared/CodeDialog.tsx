"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Simplebar from "simplebar-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";

const CodeDialog = ({ children }: { children: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div className="px-6 py-2 bg-gray-100 dark:bg-white/2 border-t border-border">
      <div className={`flex items-center ${isOpen ? "justify-between" : "justify-end"}`}>
        <h5 className={`text-base  font-semibold ${isOpen ? "block" : "hidden"}`}>
          Sample Code
        </h5>
        <TooltipProvider>
          <div className="flex items-center gap-2">
            {/* Show/Hide Code Tooltip */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs py-1 px-1.5 rounded-lg border border-border  hover:border-primary/12  hover:bg-primary/5 cursor-pointer "
            >
              {isOpen ? "Hide Code" : "Show Code"}
            </button>

            {/* Copy Code Tooltip */}
            <Tooltip>
              <TooltipTrigger>
                <button className="p-2 cursor-pointer" onClick={handleCopy} >
                  {copied ? (
                    <Check
                      size={20}
                      className="text-primary"
                    />
                  ) : (
                    <Copy
                      className="hover:text-primary"
                      size={20}
                    />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent className="whitespace-nowrap ">
                Copy Code
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      <div
        className={`code-modal rounded-md rounded-t-none p-0 my-3 bg-gray-100 dark:bg-transparent overflow-hidden ${isOpen ? "block" : "hidden"
          }`}
      >
        <Simplebar className="max-h-[400px]">
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {children}
          </SyntaxHighlighter>
        </Simplebar>
      </div>
    </div>
  );
};

export default CodeDialog;
