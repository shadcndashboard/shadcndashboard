"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, Activity } from "react";
import ProductCart from "./productcart";
import BillsAddress from "./bills-address";
import Thankyou from "./thankyou";
import { ProductContext } from "@/app/context/ecommerce-context/index";
import { sum } from "lodash";
import { ProductType } from "@/app/(dashboard-layout)/types/apps/ecommerce";

const ProductCheckout = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };
  const { cartItems } = useContext(ProductContext);
  const total: number = sum(
    cartItems.map((product: ProductType) => product.price * product.qty)
  );
  const Discount: number = Math.round(total * (5 / 100));

  return (
    <>
      <div className="mx-auto w-full max-w-3xl sm:px-8">
        <ol className="flex items-center w-full justify-center my-4">
          <li
            className={`flex w-full justify-between items-center after:content-[''] after:w-full after:h-[2px] after:border-b  after:border-2 after:inline-block relative ${activeTab === 1 || activeTab == 2
              ? "after:border-primary "
              : "after:border-border"
              }`}
          >
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 ${activeTab === 0 || activeTab == 1 || activeTab == 2
                ? "bg-primary text-white dark:text-black"
                : "bg-muted-foreground text-white"
                }`}
            >
              1
            </span>
            <div className="absolute mx-auto text-center mt-14 left-0 rtl:right-0 rtl:left-[unset]">
              Cart
            </div>
          </li>
          <li
            className={`flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-b after:border-2 after:inline-block relative ${activeTab === 2 ? "after:border-primary " : "after:border-border"
              }`}
          >
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 ${activeTab === 1 || activeTab === 2
                ? "bg-primary text-white dark:text-black"
                : "bg-muted-foreground text-white"
                }`}
            >
              2
            </span>
            <div className="absolute mx-auto text-center mt-14 -left-9 rtl:-right-10 rtl:left-[unset]">
              {" "}
              Billing & address
            </div>
          </li>
          <li className="flex items-center relative">
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 ${activeTab === 2
                ? "bg-primary text-white dark:text-black"
                : "bg-muted-foreground text-white"
                }`}
            >
              3
            </span>
            <div className="absolute mx-auto text-center mt-14 -left-3 ">
              Payment
            </div>
          </li>
        </ol>
      </div>
      <div className="mt-10">
        <div className="sm:px-8">
          {/* Cart Table */}
          <Activity mode={activeTab === 0 ? "visible" : "hidden"}>
            <ProductCart Discount={Discount} total={total} />
          </Activity>

          {/* Billing Address */}
          <Activity mode={activeTab === 1 ? "visible" : "hidden"}>
            <BillsAddress Discount={Discount} total={total} />
          </Activity>

          {/* Thank You */}
          <Activity mode={activeTab === 2 ? "visible" : "hidden"}>
            <Thankyou />
          </Activity>
        </div>
        <div className="flex justify-end gap-3 items-center sm:px-8 mt-6">
          <Button
            onClick={() => handleTabClick(0)}
            className={`rounded-md ${activeTab === 0
              ? "active bg-muted-foreground text-white "
              : "bg-muted-foreground text-white"
              }`}
          >
            Previous
          </Button>
          {activeTab === 0 ? (
            <Button
              className="rounded-md "
              onClick={() => handleTabClick(1)}
            >
              Next
            </Button>
          ) : null}

          {activeTab === 1 || activeTab == 2 ? (
            <Button
              className="rounded-md"
              onClick={() => handleTabClick(2)}
            >
              {activeTab === 2 ? "submit" : "Next"}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default ProductCheckout;
