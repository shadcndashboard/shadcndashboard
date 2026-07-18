






import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router";
import React from "react";
import SocialButtons from "./social-buttons";
import logodark from "@/assets/images/logos/logoicon-dark.svg"
import logoicon from "@/assets/images/logos/logoicon.svg"


const AuthLogin = () => {
  const router = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Success - redirect or call API
    router("/");
  };

  return (

    <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
      <div className="w-full max-w-md flex flex-col gap-6 items-center">
        {/* Logo Header */}
        <a href="/">
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
            Login to your account now
          </p>
        </div>

        {/* Social Buttons */}
        <SocialButtons />



        {/* Email/Password Form */}
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
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
          <p className="text-center text-sm font-normal text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a
              href="/auth/auth2/register"
              className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
            >
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>

  );
};

export default AuthLogin;
