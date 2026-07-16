import { Card } from "@/components/ui/card";
import SocialButtons from "../../authforms/social-buttons";
import Link from "next/link";
import type { Metadata } from "next";
import FullLogo from "@/app/(dashboard-layout)/layout/shared/logo/full-logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Boxed Login Authentication",
  description: "Log in to your account.",
};

const BoxedLogin = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-accent  px-4">
        <Card className="w-full max-w-md border-none shadow-lg p-6">
          {/* Logo */}
          <div className="mx-auto  w-fit">
            <FullLogo />
          </div>

          <SocialButtons />
          <form className="space-y-6 w-full">
            <div className="space-y-4">
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
              <div className="flex items-center justify-between text-sm flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="remember"
                    className={"cursor-pointer"}
                  />
                  <Label
                    htmlFor="remember"
                    className="text-muted-foreground font-normal cursor-pointer leading-0"
                  >
                    Remember this device
                  </Label>
                </div>
                <a
                  href="/auth/auth2/forgot-password"
                  className=" text-sm font-medium hover:underline underline-offset-4 transition-all"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full rounded-lg"
            >
              Sign in
            </Button>
          </form>
          {/* Footer */}
          <div className="flex gap-2 text-base font-medium mt-4 items-center justify-center">
            <p className="text-muted-foreground">New to ShadcnDashboard ?</p>
            <Link
              href={"/auth/auth2/register"}
              className="text-primary/80 hover:text-primary text-sm font-medium"
            >
              Create an account
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BoxedLogin;
