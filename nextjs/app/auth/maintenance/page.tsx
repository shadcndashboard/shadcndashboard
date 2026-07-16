import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Maintenance",
  description: "Site under construction.",
};
const Maintenance = () => {
  return (
    <>
      <div className="h-screen flex items-center  justify-center bg-white dark:bg-card">
        <div className="text-center">
          <div className="max-w-3xl">
            <Image
              src={"/images/backgrounds/maintenance.svg"}
              alt="error"
              className="mb-4"
              width={500}
              height={500}
            />
          </div>
          <h1 className="text-foreground text-4xl mb-6">
            Maintenance Mode!!!
          </h1>
          <h6 className="text-xl text-foreground">
            Website is Under Construction. Check back later!
          </h6>
          <Button className="mt-6 mx-auto">
            <Link href="/">Go Back to Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
