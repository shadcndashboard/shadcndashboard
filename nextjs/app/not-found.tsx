"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <Image
            src="/images/backgrounds/404.svg"
            alt="error"
            className="mb-20"
            width={500}
            height={500}
          />
          <h1 className="text-foreground text-4xl mb-6">Opps!!!</h1>
          <h6 className="text-xl text-foreground">
            This page you are looking for could not be found.
          </h6>
          <Button className="mt-6 mx-auto">
            <Link href="/">Go Back to Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
