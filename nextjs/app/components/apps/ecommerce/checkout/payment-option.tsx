import { useState } from "react";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

const PaymentOption = () => {
  const [selectedPayment, setSelectedPayment] = useState("payment");

  return (
    <Card className="mt-7 p-6">
      <h6 className="text-base mb-2">Payment Option</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-8 col-span-12">
          <RadioGroup
            value={selectedPayment}
            onValueChange={(value) => setSelectedPayment(value as string)}
            className="flex flex-col gap-4"
          >
            {/* PayPal Option */}
            <div
              className={`border border-border p-4 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer ${selectedPayment === "payment"
                ? "bg-primary/5"
                : ""
                }`}
            >
              <div className="flex items-center gap-4 sm:ps-2">
                <RadioGroupItem
                  id="paypal"
                  value="payment"
                  className="peer hidden"
                />
                <Label
                  htmlFor="paypal"
                  className="cursor-pointer grow peer-checked:[&_.title]:text-primary peer-checked:[&_.title]:font-semibold flex flex-col items-start"
                >
                  <div className="title font-semibold text-base">
                    Pay with Paypal
                  </div>

                  <p className="text-sm font-medium ">
                    You will be redirected to PayPal website to complete your
                    purchase securely.
                  </p>
                </Label>
                <Image
                  src={"/images/svgs/paypal.svg"}
                  alt="payment-icon"
                  width={36}
                  height={24}
                />
              </div>
            </div>

            {/* Credit Card Option */}
            <div
              className={`border border-border p-4 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer ${selectedPayment === "Credit"
                ? "bg-primary/5 "
                : ""
                }`}
            >
              <div className="flex items-center gap-4 sm:ps-2">
                <RadioGroupItem
                  id="master"
                  value="Credit"
                  className="peer hidden"
                />
                <Label
                  htmlFor="master"
                  className="cursor-pointer grow peer-checked:[&_.title]:text-primary peer-checked:[&_.title]:font-semibold flex flex-col items-start"
                >
                  <div className="title  font-semibold text-base">
                    Credit / Debit Card
                  </div>
                  <p className="text-sm font-medium ">
                    We support Mastercard, Visa, Discover and Stripe.
                  </p>
                </Label>
                <Image
                  src={"/images/svgs/mastercard.svg"}
                  alt="payment-icon"
                  width={36}
                  height={24}
                />
              </div>
            </div>

            {/* Cash on Delivery Option */}
            <div
              className={`border border-border p-4 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer ${selectedPayment === "Cash" ? "bg-primary/5 " : ""
                }`}
            >
              <div className="flex items-center gap-4 sm:ps-2">
                <RadioGroupItem
                  id="cash"
                  value="Cash"
                  className="peer hidden"
                />
                <Label
                  htmlFor="cash"
                  className="cursor-pointer grow peer-checked:[&_.title]:text-primary peer-checked:[&_.title]:font-semibold flex flex-col items-start"
                >
                  <div className="title  font-semibold text-base">
                    Cash on Delivery
                  </div>
                  <p className="text-sm font-medium ">
                    Pay with cash when your order is delivered.
                  </p>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Right-side image */}
        <div className="lg:col-span-4 col-span-12">
          <div className="mx-auto">
            <Image
              src={"/images/backgrounds/payment.svg"}
              alt="payment"
              width={322}
              height={215}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentOption;
