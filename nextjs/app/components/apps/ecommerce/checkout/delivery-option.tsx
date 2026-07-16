import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";

const DeliveryOption = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("delivery-free");

  return (
    <Card className="p-6">
      <h6 className="text-base mb-2">Delivery Option</h6>
      <RadioGroup
        value={selectedDelivery}
        onValueChange={(value) => setSelectedDelivery(value as string)}
        className="grid grid-cols-12 gap-5"
      >
        <div className="lg:col-span-6 col-span-12">
          <div
            className={`border p-4 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer ${selectedDelivery === "delivery-free"
              ? "bg-primary/5 "
              : ""
              }`}
          >
            <div className="flex items-center gap-4 sm:ps-2">
              <RadioGroupItem
                id="free"
                value="delivery-free"
                className="peer hidden"
              />
              <Label
                htmlFor="free"
                className="cursor-pointer peer-checked:[&_.delivery-content]:text-primary peer-checked:[&_.delivery-content]:font-semibold flex flex-col gap-2 items-start"
              >
                <span className="delivery-content font-semibold text-base">
                  Free Delivery
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Delivered on Friday, May 10
                </span>
              </Label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12">
          <div
            className={`border border-border p-4 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer  ${selectedDelivery === "delivery-fast"
              ? "bg-primary/5 "
              : ""
              }`}
          >
            <div className="flex items-center gap-4 sm:ps-2">
              <RadioGroupItem
                id="fast"
                value="delivery-fast"
                className="peer hidden"
              />
              <Label
                htmlFor="fast"
                className="cursor-pointer peer-checked:[&_.delivery-content]:text-primary peer-checked:[&_.delivery-content]:font-semibold flex flex-col gap-2 items-start"
              >
                <span className="delivery-content  font-semibold text-base">
                  Free Delivery
                </span>
                <span className="text-sm font-medium text-muted-foreground ">
                  Delivered on Wednesday, May 8
                </span>
              </Label>
            </div>
          </div>
        </div>
      </RadioGroup>
    </Card>
  );
};

export default DeliveryOption;
