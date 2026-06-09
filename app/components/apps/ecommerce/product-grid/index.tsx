"use client";

import ProductFilter from "@/app/components/apps/ecommerce/product-grid/product-filter";
import ProductList from "@/app/components/apps/ecommerce/product-grid/product-list";

import { Sheet, SheetContent, } from "@/components/ui/sheet"; // <- ShadCN Sheet
import { useContext, useState } from "react";
import { ProductProvider } from "@/app/context/ecommerce-context";
import { Card } from "@/components/ui/card";

const EcommerceShop = () => {
  const [isOpenShop, setIsOpenShop] = useState(false);

  return (
    <ProductProvider>
      <Card className="py-0!">
        <div className="flex">
          {/* ------------------------------------------- */}
          {/* Left Filter Sidebar for mobile using Sheet */}
          {/* ------------------------------------------- */}
          <div className="lg:relative lg:block hidden max-w-[250px] w-full">
            <ProductFilter />
          </div>
          {/* Mobile Filter using Sheet/Drawer */}
          <Sheet open={isOpenShop} onOpenChange={setIsOpenShop}>
            <SheetContent
              side={"left"}
              className="w-[250px] p-0 lg:hidden  overflow-y-scroll"
            >
              <ProductFilter />
            </SheetContent>
          </Sheet>

          {/* ------------------------------------------- */}
          {/* Product List */}
          {/* ------------------------------------------- */}
          <div className="p-6 w-full">
            <ProductList openShopFilter={setIsOpenShop} />
          </div>
        </div>
      </Card>
    </ProductProvider>
  );
};

export default EcommerceShop;
