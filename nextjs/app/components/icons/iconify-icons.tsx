"use client";

import { Card } from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "next-themes";

const IconifyIcon = () => {
  const { theme } = useTheme();
  const selectedStyle = theme === "dark" ? vs2015 : docco;
  return (
    <>
      <Card className="flex flex-col gap-3 p-6">
        <div className="space-y-2">
          <h6> Installation</h6>
          <p className="text-muted-foreground">
            To use Tabler icons in your project, install the official React
            package:
          </p>
          <SyntaxHighlighter language="typescript" style={selectedStyle}>
            {` npm i @iconify-icon/react `}
          </SyntaxHighlighter>
        </div>
        <div className="space-y-2">
          <h6> Usage Example</h6>
          <p className="text-muted-foreground">Import and use any icon in your components:</p>
          <SyntaxHighlighter language="typescript" style={selectedStyle}>
            {`import { Icon } from '@iconify/react';
function MyComponent() {
  return <Icon icon='solar:arrow-right-linear' width='20' height='20' />;
}`}
          </SyntaxHighlighter>
        </div>
        <div className="space-y-2">
          <h6> Explore Icons</h6>
          <iframe
            src="https://icon-sets.iconify.design/solar/"
            title="Inline Frame Example"
            width="100%"
            height="650"
          ></iframe>
        </div>
      </Card>
    </>
  );
};

export default IconifyIcon;
