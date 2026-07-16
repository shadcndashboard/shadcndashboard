import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error-404",
  description: "Page not found.",
};
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div className="text-center">
          <img
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
