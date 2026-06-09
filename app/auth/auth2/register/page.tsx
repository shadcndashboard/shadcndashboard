import { Card } from "@/components/ui/card";
import React from "react";
import SocialButtons from "../../authforms/social-buttons";
import Link from "next/link";
import type { Metadata } from "next";
import FullLogo from "@/app/(dashboard-layout)/layout/shared/logo/full-logo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export const metadata: Metadata = {
  title: "Boxed Register Authentication",
  description: "Sign up to create your account and start using the app.",
};

const BoxedRegister = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted">
        <div className="flex h-full justify-center items-center px-4">
          <Card className="md:w-112.5 w-full border-none shadow-lg p-6">
            <div className="mx-auto  w-fit">
              <FullLogo />
            </div>

            <SocialButtons />

            <form className="space-y-6 w-full">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Name*
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"

                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"

                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Password*
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"

                    required
                  />
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-lg"
              >
                Sign in
              </Button>
            </form>
            <div className="flex gap-2 text-base text-muted-foreground font-medium mt-4 items-center justify-center">
              <p>Already have an Account?</p>
              <Link
                href={"/auth/auth2/login"}
                className="text-primary/80 text-base hover:text-primary font-medium"
              >
                Sign in
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BoxedRegister;
