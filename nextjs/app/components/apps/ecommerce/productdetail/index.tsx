"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { ProductContext } from "@/app/context/ecommerce-context/index";
import { useParams } from "next/navigation";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { ProductType } from "@/app/(dashboard-layout)/types/apps/ecommerce";
import RatingStars from "@/app/components/shared/rating-stars";
import { Separator } from "@/components/ui/separator";
import { Check } from 'lucide-react';

const ProductDetail = () => {
  const { products, addToCart } = useContext(ProductContext);
  const { id } = useParams<{ id: string }>();

  const product: ProductType | undefined = products.find(
    (prod) => prod.id === parseInt(id as string)
  );
  const [scolor, setScolor] = useState<string>(
    product ? product.colors[0] : ""
  );
  const [count, setCount] = useState<number>(1);
  const [cartAlert, setCartAlert] = useState(false);

  const setColor = (color: string) => setScolor(color);

  const handleQuantityChange = (increment: boolean) => {
    setCount((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id);
      setCartAlert(true);
      setTimeout(() => {
        setCartAlert(false);
      }, 3000);
    }
  };

  if (!product) return <>No product</>;

  return (
    <div className="px-5 lg:px-0">
      <div className="flex gap-2 items-center ">
        <Badge
          variant={product.stock ? "default" : "destructive"}

        >
          {product.stock ? "In Stock" : "Out of Stock"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {product.category}
        </span>
      </div>
      <h4 className="text-xl font-semibold my-2">{product.title}</h4>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu,
        tincidunt bibendum felis.
      </p>
      <h5 className="text-xl flex gap-2 items-center my-3">
        <span className="text-lg text-muted-foreground line-through font-semibold">
          ${product.salesPrice}
        </span>
        <span className="font-bold ">${product.price}</span>
      </h5>
      <div className="flex items-center gap-2">
        <RatingStars rating={4} />
        <span className="text-sm text-muted-foreground font-medium">
          (236 reviews)
        </span>
      </div>

      <Separator className={"my-6"} />
      <div className="flex items-center gap-3 mb-8">
        <span className="text-base font-semibold">Colors:</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`h-6 w-6 rounded-full cursor-pointer border flex items-center justify-center`}
              onClick={() => setColor(color)}
              style={{ backgroundColor: color }}
            >
              {scolor === color && (
                <Check
                  size={16}
                  className="text-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-base font-semibold">QTY:</span>
        <div className="flex items-center border  rounded-md">
          <button
            type="button"
            onClick={() => handleQuantityChange(false)}
            className="h-10 w-10 flex items-center justify-center border-x  hover:bg-accent cursor-pointer"
          >
            <span className="text-xl">-</span>
          </button>
          <input
            type="text"
            readOnly
            value={count}
            className="w-12 text-center h-10 border-x"
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(true)}
            className="h-10 w-10 flex items-center justify-center hover:bg-accent cursor-pointer"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      <Separator className={"my-6"} />
      <div className="flex gap-3 items-center mb-6">
        <Button
          className="px-6 rounded-md "
          onClick={handleAddToCart}
        >
          Buy now
        </Button>
        <Button
          variant={"destructive"}
          className="px-6 rounded-md bg-destructive text-white hover:bg-destructive/80"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">Dispatched in 2-3 weeks</p>
      <Link href="#" className="text-sm text-primary font-medium">
        Why the longer time for delivery?
      </Link>
      {cartAlert && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs">
          <Alert className="w-full text-center rounded flex items-center justify-center gap-2 bg-chart-3/10">
            <AlertDescription className="text-chart-3">
              Item Added to the Cart!!!
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
