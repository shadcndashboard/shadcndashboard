

import React from "react";

import google from "@/assets/images/svgs/google-icon.svg"
import github from "@/assets/images/svgs/github-icon.svg"
import { Button } from "@/components/ui/button";

interface MyAppProps {
  title?: string;
}

const SocialButtons: React.FC<MyAppProps> = () => {
  return (
    <>

      <div className="flex items-center justify-center gap-3 w-full flex-col sm:flex-row">
        <Button
          variant="outline"
          className="h-9 shadow-xs flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium dark:bg-background hover:cursor-pointer w-full"
        >
          <img
            src={google}
            alt="Google"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="h-9 shadow-xs flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium dark:bg-background hover:cursor-pointer w-full"
        >
          <img
            src={github}
            alt="Github"
            width={16}
            height={16}
            className="w-4 h-4 dark:invert"
          />
          Sign in with Github
        </Button>
      </div>
      {/* Divider */}

      <div className="w-full flex items-center gap-3 text-sm font-normal text-muted-foreground before:content-[''] before:h-px before:flex-1 before:bg-border after:content-[''] after:h-px after:flex-1 after:bg-border">
        or sign in with
      </div>
    </>
  );
};

export default SocialButtons;
