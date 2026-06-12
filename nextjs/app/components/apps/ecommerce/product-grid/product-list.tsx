"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, SetStateAction, Dispatch } from "react";

import Link from "next/link";
import Image from "next/image";
import ProductSearch from "./product-search";

import CardBox from "@/app/components/shared/CardBox";
import { ProductContext } from "@/app/context/ecommerce-context";
import RatingStars from "@/app/components/shared/rating-stars";
import { ShoppingBasket } from 'lucide-react';


type ShopProps = {
  openShopFilter: Dispatch<SetStateAction<boolean>>; // or specify the exact type of the function
};

const ProductList = ({ openShopFilter }: ShopProps) => {
  const { filteredAndSortedProducts, addToCart, filterReset } =
    useContext(ProductContext);
  const [cartAlert, setCartAlert] = useState(false);
  const handleClick = () => {
    setCartAlert(true);
    setTimeout(() => {
      setCartAlert(false);
    }, 3000);
  };

  return (
    <>
      {/* Search Products */}
      <ProductSearch onClickFilter={() => openShopFilter(true)} />
      <div className="grid grid-cols-12 gap-6 mt-6">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <div
              className="lg:col-span-4 md:col-span-6 col-span-12"
              key={product.id}
            >
              <CardBox className="p-0 overflow-hidden group card-hover">
                <div className="relative">
                  <Link href={`/apps/ecommerce/detail/${product.id}`}>
                    <div className="overflow-hidden h-[265px] w-full">
                      <Image
                        src={product.photo}
                        alt="materialm"
                        height={265}
                        width={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-6 pt-4">
                    <div className="flex justify-between items-center -mt-8 relative  ">
                      <div className="ms-auto">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Button
                                className="btn-circle ms-auto"
                                onClick={() => {
                                  addToCart(product.id);
                                  handleClick();
                                }}
                              >
                                <ShoppingBasket size={18} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Add To Cart</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <h6 className="text-base line-clamp-1 group-hover:text-primary">
                      {product.title}
                    </h6>
                    <div className="flex justify-between items-center mt-1">
                      <h5 className="text-base flex gap-2 items-center">
                        ${product.price}{" "}
                        <span className="font-normal text-sm line-through">
                          ${product.salesPrice}
                        </span>
                      </h5>
                      <RatingStars rating={product.rating} />
                    </div>
                  </div>
                </div>
              </CardBox>
            </div>
          ))
        ) : (
          <>
            <div className="col-span-12">
              <div className="flex justify-center text-center">
                <div>
                  <Image
                    src={"/images/backgrounds/empty-shopping-cart.svg"}
                    alt="no product"
                    width={350}
                    height={350}
                  />
                  <h2 className="text-2xl">There is no Product</h2>
                  <p className=" my-3">
                    The product you are searching for is no longer available.
                  </p>
                  <Button
                    className="w-fit px-4 mx-auto rounded-md"
                    onClick={filterReset}
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {cartAlert && (
        <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center ">
          <Alert className="max-w-sm w-full text-center rounded bg-primary/5 ">
            <AlertDescription className="text-primary">
              Item Added to the Cart!!!
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
};

export default ProductList;
