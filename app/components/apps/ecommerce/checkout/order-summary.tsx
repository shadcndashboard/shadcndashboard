import { Card } from "@/components/ui/card";

interface OrderSummaryProps {
  Discount: number;
  total: number;
}

const OrderSummary = ({ Discount, total }: OrderSummaryProps) => {
  return (
    <>
      <Card className="p-10 mt-6 shadow-none rounded-md">
        <h5 className="text-lg">Order Summary</h5>
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex justify-between gap-3 items-center">
            <p className="text-base  font-medium">Sub Total</p>
            <h6 className="text-base">${total}</h6>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <p className="text-base  font-medium">Discount 5%</p>
            <h6 className="text-base text-destructive">-${Discount}</h6>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <p className="text-base  font-medium">Shipping</p>
            <h6 className="text-base">Free</h6>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <p className="text-base font-semibold">Total</p>
            <h6 className="text-xl">${total - Discount}</h6>
          </div>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
