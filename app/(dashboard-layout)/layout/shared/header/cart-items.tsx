"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Minus, Plus } from "lucide-react";

interface CartItem {
  key: string;
  img: string;
  title: string;
  desc: string;
  price: string;
  quantity: number;
  productType: string;
}

interface CartItemsProps {
  cartItems: CartItem[];
  updateQuantity: (productType: string, actionType: string) => void;
  subTotal: number;
  total: number;
}

const CartItems = ({ cartItems, updateQuantity, subTotal, total }: CartItemsProps) => {

  return (
    <SimpleBar className="h-[calc(100vh-85px)]">
      <div className="px-6 py-4">
        {cartItems.map((item) => (
          <div key={item.key} className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-4">
              <Image
                src={item.img}
                alt="product"
                className="rounded-md"
                height={80}
                width={80}
              />
            </div>
            <div className="col-span-8">
              <h4 className="text-sm font-medium mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">
                {item.desc}
              </p>
              <div className="flex mt-3 items-center justify-between">
                <p className="font-semibold text-xs text-muted-foreground">
                  {item.price}
                </p>
                <div className="flex">
                  <button
                    onClick={() => updateQuantity(item.productType, "dec")}
                    className="w-5 h-5 bg-primary/5 hover:bg-primary  hover:text-primary-foreground text-primary flex cursor-pointer justify-center items-center rounded-l-md"
                  >
                    <Minus width={12} />
                  </button>


                  <div className="w-8 h-5 flex items-center justify-center font-semibold text-xs text-muted-foreground">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => updateQuantity(item.productType, "inc")}
                    className="w-5 h-5 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground  flex cursor-pointer justify-center items-center rounded-r-md"
                  >
                    <Plus width={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mb-6">
          <p className="font-normal text-sm text-muted-foreground">
            Sub Total
          </p>
          <span className="font-semibold text-sm text-muted-foreground">
            ${subTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="font-normal text-sm text-muted-foreground">
            Total
          </p>
          <span className="font-semibold text-sm text-muted-foreground">
            ${total.toFixed(2)}
          </span>
        </div>

        <Button variant="outline" className="w-full">
          <Link href="/apps/ecommerce/shop">Go to shopping cart</Link>
        </Button>
      </div>
    </SimpleBar>
  );
};

export default CartItems;
