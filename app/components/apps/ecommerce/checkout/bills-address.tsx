
import { Activity, useState } from "react";
import OrderSummary from "./order-summary";
import { Button } from "@/components/ui/button";
import DeliveryOption from "./delivery-option";
import PaymentOption from "./payment-option";
import { Card } from "@/components/ui/card";
import { Speaker } from 'lucide-react';

interface BillsAddressProps {
  Discount: number;
  total: number;
}

const BillsAddress = ({ Discount, total }: BillsAddressProps) => {
  const [isVisibleAddress, setIsVisibleAddress] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisibleAddress(!isVisibleAddress);
  };
  return (
    <>
      {!isVisibleAddress ? (
        <>
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-4 col-span-12">
              <Card className="shadow-none p-6 gap-3">
                <h5 className="text-base">Johnathan Doe</h5>
                <p className="text-xs my-2 text-muted-foreground">
                  E601 Vrundavan Heights, godrej garden city - 382481
                </p>
                <h6 className="flex gap-2 items-center text-base mb-4">
                  <Speaker size={24} />
                  9999501050
                </h6>
                <Button
                  variant={"outline"}
                  onClick={toggleVisibility}
                  className={
                    "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  Deliver To this address
                </Button>
              </Card>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <Card className="shadow-none p-6 gap-3">
                <h5 className="text-base">ParleG Doe</h5>
                <p className="text-xs  my-2 text-muted-foreground">
                  D201 Galexy Heights, godrej garden city - 382481
                </p>
                <h6 className="flex gap-2 items-center text-base mb-4">
                  <Speaker size={24} />
                  9999501050
                </h6>
                <Button
                  variant={"outline"}
                  onClick={toggleVisibility}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Deliver To this address
                </Button>
              </Card>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <Card className="shadow-none p-6 gap-3">
                <h5 className="text-base">Guddu Bhaiya</h5>
                <p className="text-xs  my-2 text-muted-foreground">
                  Mumbai khao gali, Behind shukan, godrej garden city - 382481
                </p>
                <h6 className="flex gap-2 items-center text-base mb-4">
                  <Speaker size={24} />
                  9999501050
                </h6>
                <Button
                  variant={"outline"}
                  onClick={toggleVisibility}
                  className={
                    "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  Deliver To this address
                </Button>
              </Card>
            </div>
          </div>
        </>
      ) : null}

      {/* Delivery Payment Options */}
      <Activity mode={isVisibleAddress ? "visible" : "hidden"}>
        <>
          <DeliveryOption />
          <PaymentOption />
        </>
      </Activity>
      {/* Order Summery */}
      <OrderSummary Discount={Discount} total={total} />
    </>
  );
};

export default BillsAddress;
