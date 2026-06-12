"use client";

import { Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const Variation = () => {
  const [variations, setVariations] = useState([
    { id: 1, type: "Size", value: "" },
  ]);
  const [nextId, setNextId] = useState(2);

  const addVariation = () => {
    const newVariation = { id: nextId, type: "Size", value: "" };
    setVariations([...variations, newVariation]);
    setNextId(nextId + 1);
  };

  const removeVariation = (id: number) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      const updatedVariations = variations.filter(
        (variance) => variance.id !== id
      );
      setVariations(updatedVariations);
    }
  };

  const handleValueChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedVariations = variations.map((variance) =>
      variance.id === id ? { ...variance, value: event.target.value } : variance
    );
    setVariations(updatedVariations);
  };

  const handleTypeChange = (id: number, newType: string) => {
    const updatedVariations = variations.map((variance) =>
      variance.id === id ? { ...variance, type: newType } : variance
    );
    setVariations(updatedVariations);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h5>Variation</h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {variations.map((variation) => (
          <div
            key={variation.id}
            className="grid grid-cols-12 md:gap-6 gap-5 items-end mb-3"
          >
            <div className="md:col-span-4 col-span-12">
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor={`variation-type-${variation.id}`}>
                    Product Name <span className="text-destructive ">*</span>
                  </Label>
                </div>
                <Select required>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue>Size</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className={"cursor-pointer"} value="Size">Size</SelectItem>
                    <SelectItem className={"cursor-pointer"} value="Color">Color</SelectItem>
                    <SelectItem className={"cursor-pointer"} value="Material">Material</SelectItem>
                    <SelectItem className={"cursor-pointer"} value="Style">Style</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <Input
                type="text"

                placeholder="Variation"
                value={variation.value}
                onChange={(e) => handleValueChange(variation.id, e)}
              />
            </div>
            <div className="md:col-span-4 col-span-12">
              <Button
                variant={"destructive"}
                onClick={() => removeVariation(variation.id)}
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        ))}

        <Button
          className="w-fit flex items-center gap-2 mt-4 "
          onClick={addVariation}
        >
          <Plus size={18} /> Add another variation
        </Button>
      </CardContent>
    </Card>
  );
};

export default Variation;
