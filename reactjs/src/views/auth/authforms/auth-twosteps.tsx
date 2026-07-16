
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";


const AuthTwoSteps = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md flex flex-col gap-6 items-center">

          <div className="text-center flex flex-col gap-1">
            <p className="text-2xl font-medium text-foreground">
              Two Steps Verification
            </p>
            <p className="text-sm font-normal text-muted-foreground">
              We sent a verification code to your mobile. Enter the code below to verify your identity.


            </p>
          </div>

          {/* Form */}
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
                  <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                    Didn't get the code?{" "}
                    <a
                      href="/"
                      className="font-medium text-card-foreground no-underline!"
                    >
                      Resend code
                    </a>
                  </FieldDescription>
                </Field>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthTwoSteps;
