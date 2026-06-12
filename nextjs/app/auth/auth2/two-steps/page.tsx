import { Card } from "@/components/ui/card";
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Field, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import FullLogo from "@/app/(dashboard-layout)/layout/shared/logo/full-logo";
export const metadata: Metadata = {
  title: "Boxed Two Steps Authentication",
  description: "Verify your account by entering the code sent to your phone.",
};
const BoxedTwoStep = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted">
        <div className="flex h-full justify-center items-center px-4">
          <Card className="md:w-112.5 w-full border-none p-6">

            <div className="mx-auto  w-fit">
              <FullLogo />
            </div>
            <div className="text-center flex flex-col gap-2">

              <p className="text-sm font-normal text-muted-foreground">
                We sent a verification code to your mobile. Enter the code below to verify your identity.


              </p>
              <p className="font-bold">******1234</p>
            </div>

            <form className="space-y-6 w-full">
              <FieldGroup className="gap-6">
                <div className="flex flex-col  gap-6 sm:gap-8">
                  <InputOTP maxLength={6} id="otp" required>

                    <InputOTPGroup className="gap-1 *:data-[slot=input-otp-slot]:rounded-lg *:data-[slot=input-otp-slot]:flex-1 *:data-[slot=input-otp-slot]:size-9  w-full">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>

                  <Field className="gap-4">
                    <Button
                      type="submit"
                      size={"lg"}
                      className="rounded-lg"
                    >
                      Verify Now
                    </Button>

                  </Field>
                </div>
              </FieldGroup>
            </form>
            <div className="flex gap-2 text-base text-muted-foreground font-medium mt-4 items-center justify-center">
              <p>Didn't get the code?</p>
              <Link href={"/"} className="text-primary text-sm font-medium">
                Resend
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BoxedTwoStep;
