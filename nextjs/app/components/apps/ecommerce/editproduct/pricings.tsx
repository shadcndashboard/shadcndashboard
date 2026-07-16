"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Pricing = () => {
  const [discountType, setDiscountType] = useState("no-discount");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [fixedPrice, setFixedPrice] = useState("140");
  const [taxClass, setTaxClass] = useState("Tax Free");
  const [vatAmount, setVatAmount] = useState("35");

  const handleDiscountChange = (value: unknown) => {
    setDiscountType(value as string);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h5>Pricing</h5>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Base Price */}
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="prednm">
                Base Price <span className="text-destructive ">*</span>
              </Label>
            </div>
            <Input
              id="prednm"
              type="text"
              value="150"

              placeholder="Product Price"
            />
            <small className="text-xs text-muted-foreground">
              Set the product price.
            </small>
          </div>

          {/* Discount Type */}
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="disctype">Discount Type</Label>
            </div>

            <RadioGroup
              value={discountType}
              onValueChange={handleDiscountChange}
              className="grid grid-cols-12 gap-6"
            >
              {/* No Discount */}
              <div className="lg:col-span-4 col-span-12">

                <Label
                  htmlFor="no-discount"
                  className="block cursor-pointer"
                >
                  <div className="border border-border p-4 rounded-md hover:border-primary hover:bg-primary/5">
                    <div className="flex items-center gap-4 sm:ps-2">
                      <RadioGroupItem
                        value="no-discount"
                        id="no-discount"
                        className="cursor-pointer"
                      />
                      <span className="font-semibold text-base">
                        No Discount
                      </span>
                    </div>
                  </div>
                </Label>
              </div>

              {/* Percentage */}
              <div className="lg:col-span-4 col-span-12">


                <Label
                  htmlFor="percentage"
                  className="block cursor-pointer"
                >
                  <div className="border border-border p-4 rounded-md hover:border-primary hover:bg-primary/5">
                    <div className="flex items-center gap-4 sm:ps-2">
                      <RadioGroupItem
                        value="percentage"
                        id="percentage"
                        className="cursor-pointer"
                      />
                      <span className="font-semibold text-base">
                        No Discount
                      </span>
                    </div>
                  </div>
                </Label>
              </div>

              {/* Fixed Price */}
              <div className="lg:col-span-4 col-span-12">

                <Label
                  htmlFor="fixed-price"
                  className="block cursor-pointer"
                >
                  <div className="border border-border p-4 rounded-md hover:border-primary hover:bg-primary/5">
                    <div className="flex items-center gap-4 sm:ps-2">
                      <RadioGroupItem
                        value="fixed-price"
                        id="fixed-price"
                        className="cursor-pointer"
                      />
                      <span className="font-semibold text-base">
                        No Discount
                      </span>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            {/* Percentage Slider */}
            {discountType === "percentage" && (
              <div className="col-span-12 my-6">
                <div className="mb-1 block">
                  <Label htmlFor="discount-slider">
                    Set Discount Percentage
                  </Label>
                </div>
                <Slider
                  id="discount-slider"
                  max={100}
                  step={1}
                  defaultValue={[10]} // set a sensible default if needed
                />
                <small className="text-xs  text-muted-foreground">
                  Set a percentage discount to be applied on this product.
                </small>
              </div>
            )}

            {/* Fixed Price Input */}
            {discountType === "fixed-price" && (
              <div className="col-span-12 my-6">
                <div className="mb-2 block">
                  <Label htmlFor="dis">
                    Fixed Discounted Price{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Input
                  id="dis"
                  type="text"

                  placeholder="Discounted Price"
                />
                <small className="text-xs text-muted-foreground ">
                  Set the discounted product price. The product will be reduced
                  at the determined fixed price.
                </small>
              </div>
            )}
          </div>

          {/* Tax Class and VAT */}
          <div className="grid grid-cols-12 gap-6 mt-8">
            {/* Tax Class */}
            <div className="lg:col-span-6 col-span-12">
              <div className="mb-2 block">
                <Label htmlFor="tax-class">
                  Tax Class <span className="text-destructive">*</span>
                </Label>
              </div>
              <Select required>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue>
                    {taxClass ? taxClass : "Select an option"}{" "}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className={"cursor-pointer"} value="Tax Free">Tax Free</SelectItem>
                  <SelectItem className={"cursor-pointer"} value="Taxable Goods">Taxable Goods</SelectItem>
                  <SelectItem className={"cursor-pointer"} value="Downloadable Products">
                    Downloadable Products
                  </SelectItem>
                </SelectContent>
              </Select>
              <small className="text-xs text-muted-foreground">
                Set the product tax class.
              </small>
            </div>

            {/* VAT Amount */}
            <div className="lg:col-span-6 col-span-12">
              <div className="mb-2 block">
                <Label htmlFor="vat">
                  VAT Amount (%) <span className="text-destructive">*</span>
                </Label>
              </div>
              <Input id="vat" type="text" value="12" />
              <small className="text-xs text-muted-foreground">
                Set the product VAT amount.
              </small>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Pricing;
