"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useContext } from "react";
import { ProductFiterType } from "@/app/(dashboard-layout)/types/apps/ecommerce";
import { ProductContext } from "@/app/context/ecommerce-context";
import { Separator } from "@/components/ui/separator";
import { Award, Book, ChartColumnDecreasing, ChartColumnIncreasing, Check, CirclePercent, ClipboardList, Laptop, Presentation, Ribbon, Smile } from 'lucide-react';

const ProductFilter = () => {
  const {
    selectedCategory,
    selectCategory,
    sortBy,
    updateSortBy,
    selectedGender,
    selectGender,
    priceRange,
    updatePriceRange,
    selectedColor,
    selectColor,
    products,
    filterReset,
  } = useContext(ProductContext);


  const filterCategory: ProductFiterType[] = [
    {
      id: 1,
      filterbyTitle: "Filter by Category",
    },
    {
      id: 2,
      name: "All",
      sort: "All",
      icon: ClipboardList,
    },
    {
      id: 3,
      name: "Fashion",
      sort: "fashion",
      icon: Award,
    },
    {
      id: 9,
      name: "Books",
      sort: "books",
      icon: Book,
    },
    {
      id: 10,
      name: "Toys",
      sort: "toys",
      icon: Smile,
    },
    {
      id: 11,
      name: "Electronics",
      sort: "electronics",
      icon: Laptop,
    },
    {
      id: 6,
      devider: true,
    },
  ];

  const filterbySort = [
    {
      id: 1,
      value: "newest",
      label: "Newest",
      icon: Presentation,
    },
    {
      id: 2,
      value: "priceDesc",
      label: "Price: High-Low",
      icon: ChartColumnDecreasing,
    },
    {
      id: 3,
      value: "priceAsc",
      label: "Price: Low-High",
      icon: ChartColumnIncreasing,
    },
    {
      id: 4,
      value: "discount",
      label: "Discounted",
      icon: CirclePercent,
    },
  ];

  const genders = [
    {
      id: 1,
      radioid: "All",
    },
    {
      id: 2,
      radioid: "Men",
    },
    {
      id: 3,
      radioid: "Women",
    },
    {
      id: 4,
      radioid: "Kids",
    },
  ];
  const prices = [
    {
      id: 1,
      lable: "All",
      radioid: "all",
    },
    {
      id: 2,
      lable: "0-50",
      radioid: "0-50",
    },
    {
      id: 3,
      lable: "50-100",
      radioid: "50-100",
    },
    {
      id: 4,
      lable: "100-200",
      radioid: "100-200",
    },
    {
      id: 5,
      lable: "200-99999",
      radioid: "200-99999",
    },
  ];

  const filterbyColors = [
    "All",
    ...Array.from(new Set(products.flatMap((p) => p.colors))),
  ];

  return (
    <div className="w-full border-e border-border h-full ">
      {/* Category */}
      <ul className="my-4 mt-0 pt-4 flex flex-col gap-1">
        {filterCategory.map((filter) =>
          filter.filterbyTitle ? (
            <h6 key={filter.id} className="capitalize text-sm py-2 px-6">
              {filter.filterbyTitle}
            </h6>
          ) : filter.devider ? (
            <div key={filter.id} className="my-2">
              <Separator />
            </div>
          ) : (
            <li
              key={filter.id}
              className={`flex items-center py-2 gap-2 px-4 rounded-md cursor-pointer mx-6 ${selectedCategory === filter.sort
                ? "text-primary-foreground bg-primary"
                : "text-muted-foreground hover:bg-primary/5 hover:text-primary "
                }`}
              onClick={() => selectCategory(filter.sort!)}
            >
              {filter.icon && <filter.icon size={18} />}
              {filter.name}
            </li>
          )
        )}
      </ul>

      {/* Sort */}
      <ul className="mt-0 px-6 flex flex-col gap-1">
        <h6 className="capitalize text-sm pb-2">Sort By</h6>
        {filterbySort.map((filter) => (
          <li
            key={filter.id}
            className={`flex w-full items-center py-2 gap-2 px-4  rounded-md cursor-pointer ${sortBy === filter.value ? "text-primary-foreground bg-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}
            onClick={() => updateSortBy(filter.value)}
          >
            <filter.icon size={18} />
            {filter.label}
          </li>
        ))}
      </ul>

      <Separator className="my-4" />

      {/* Gender RadioGroup */}
      <div className="mt-0 px-6">
        <h6 className="capitalize text-sm pb-2">By Gender</h6>
        <RadioGroup
          value={selectedGender}
          onValueChange={(val: unknown) => selectGender(val as string)}
          className="flex flex-col gap-1"
        >
          {genders.map((gen) => (
            <div
              key={`gender-${gen.id}`}
              className="group py-2 gap-2 px-4 hover:bg-primary/5 hover:text-primary  rounded-md cursor-pointer text-muted-foreground"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  id={gen.radioid}
                  value={gen.radioid}
                  className="cursor-pointer"
                />
                <Label
                  htmlFor={gen.radioid}
                  className="cursor-pointer font-normal text-sm mb-0 group-hover:text-primary"
                >
                  {gen.radioid}
                </Label>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator className="my-4" />

      {/* Pricing RadioGroup */}
      <div className="mt-0 px-6">
        <h6 className="capitalize text-sm pb-2">By Pricing</h6>
        <RadioGroup
          value={priceRange}
          onValueChange={(value) => updatePriceRange(value as string)}
          className="flex flex-col gap-1"
        >
          {prices.map((price) => (
            <div
              key={price.id}
              className="group flex py-2 gap-2 px-4 items-center rounded-md hover:bg-primary/5 cursor-pointer text-muted-foreground"
            >
              <RadioGroupItem
                value={price.radioid}
                id={`price-${price.radioid}`}
              />
              <Label
                htmlFor={`price-${price.radioid}`}
                className="cursor-pointer font-normal text-sm mb-0 group-hover:text-primary"
              >
                {price.lable}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator className="my-4" />

      {/* Colors */}
      <div className="mt-0 px-4 pb-4">
        <h6 className="capitalize text-sm pb-2">By Colors</h6>
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {filterbyColors.map((theme, idx) => (
            <Label
              key={idx}
              className="h-6 w-6 rounded-full cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: theme !== "All" ? theme : "white",
                border: theme === "All" ? "1px solid border" : "none",
              }}
              onClick={() =>
                selectColor(selectedColor === theme ? "All" : theme)
              }
            >
              {selectedColor === theme && <Check size={16} />}
            </Label>
          ))}
        </div>

        <Button className="w-full rounded-md" onClick={filterReset}>
          Reset Filter
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
