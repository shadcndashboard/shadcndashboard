import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Thankyou = () => {
  return (
    <>
      <div className="text-center mx-auto">
        <h5 className="text-lg">Thank you for your purchase!</h5>
        <p className="text-primary text-sm font-semibold">
          Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d
        </p>
        <Image
          src={"/images/backgrounds/payment.svg"}
          width={350}
          height={350}
          alt="payment"
          className="mx-auto my-5"
        />
        <p className="text-xs ">
          We will send you a notification
          <br />
          within 2 days when it ships.
        </p>
      </div>
      <div className="sm:flex justify-between mt-6">
        <Button className="sm:mb-0 mb-4 sm:w-fit w-full bg-teal-500 hover:bg-teal-500/80 text-white ">
          <Link href="/apps/ecommerce/shop">Continue Shopping</Link>
        </Button>
        <Button variant={"outline"} className="sm:mb-0 sm:w-fit w-full">Download Receipt</Button>
      </div>
    </>
  );
};

export default Thankyou;
