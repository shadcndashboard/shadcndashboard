

import React from "react";
import { useNavigate } from "react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialButtons from "./social-buttons";
import logodark from "@/assets/images/logos/logoicon-dark.svg"
import logoicon from "@/assets/images/logos/logoicon.svg"
const AuthRegister = () => {
  const router = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Redirect to home or dashboard
    router("/");
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
      <div className="w-full max-w-md flex flex-col gap-6 items-center">
        {/* Logo Header */}
        <a href="#">
          <img
            src={logodark}
            alt="Logo"
            width={40}
            height={40}
            className="dark:hidden block"
          />
          <img
            src={logoicon}
            alt="Logo"
            width={40}
            height={40}
            className="dark:block hidden"
          />
        </a>

        <div className="text-center flex flex-col gap-1">
          <p className="text-2xl font-medium text-foreground">
            Welcome to ShadcnDashboard
          </p>
          <p className="text-sm font-normal text-muted-foreground">
            Sign up to your account now
          </p>
        </div>

        {/* Social Buttons */}
        <SocialButtons />

        {/* Email/Password Form */}
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
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
            className="w-full rounded-lg "
          >
            Sign up
          </Button>
          <p className="text-center text-sm font-normal text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/auth/auth2/login"
              className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthRegister;
