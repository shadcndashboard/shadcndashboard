"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
const ProductData = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  const [Cats, setCats] = useState<string[]>([]);
  const [showCatOptions, setShowCatOptions] = useState<boolean>(false);
  const [catOptions, setCatOptions] = useState<string[]>([
    "Computer",
    "Watches",
    "Headphone",
    "Beauty",
    "Fashion",
    "Footwear",
  ]);

  const [showTagOptions, setShowTagOptions] = useState<boolean>(false);
  const [tagOptions, setTagOptions] = useState<string[]>([
    "New",
    "Trending",
    "Headphone",
    "Fashion",
    "Footwear",
  ]);

  const handleCatInputChange = () => {
    setShowCatOptions(true); // Display category options when clicking in input
  };

  const handleCatInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && Cats.length > 0) {
      setCats([]);
      setShowCatOptions(false); // Hide category options after adding categories
    }
  };

  const handleCatClick = (option: string) => {
    if (!Cats.includes(option)) {
      setCats([...Cats, option]); // Add selected option to categories if not already selected
    }
    setShowCatOptions(false); // Hide category options after selecting an option
  };

  const handleCatDelete = (catToDelete: string) => {
    const updatedCats = Cats.filter((cat) => cat !== catToDelete);
    setCats(updatedCats);
  };

  const handleTagInputChange = () => {
    setShowTagOptions(true); // Display tag options when clicking in input
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagClick = (option: string) => {
    if (!tags.includes(option)) {
      setTags([...tags, option]); // Add selected option to tags if not already selected
    }
    setShowTagOptions(false); // Hide tag options after selecting an option
  };

  const handleTagDelete = (tagToDelete: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  return (
    <Card className="p-6">
      <h5 className="text-base">Product Details</h5>
      <div className="">
        <div className="mb-2 block">
          <Label htmlFor="cat">
            Categories <span className="text-destructive">*</span>
          </Label>
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-1 min-h-[40px] w-full rounded-md border border-input bg-background px-2 py-1 focus-within:ring-1 focus-within:ring-primary">
            {Cats.map((cat, index) => (
              <span
                key={index}
                className="flex items-center rounded-full bg-primary/5 px-2 py-1 text-sm text-primary"
              >
                {cat}
                <X
                  size={12}
                  className="ml-1 cursor-pointer"
                  onClick={() => handleCatDelete(cat)}
                />
              </span>
            ))}

            <input
              type="text"
              className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
              onFocus={handleCatInputChange}
              onKeyDown={handleCatInputKeyDown}
            />
          </div>

          <small className="text-xs text-muted-foreground">
            Add product to a category.
          </small>

          {showCatOptions && (
            <div className="absolute z-10 mt-1 w-full rounded-md bg-card shadow-lg">
              {catOptions.map((option, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-3 py-2 hover:bg-muted"
                  onClick={() => handleCatClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        <Button variant="outline" className="w-fit flex items-center gap-2 rounded-md ">
          <Plus size={18} /> Add selected category
        </Button>
      </div>

      <div className="mt-4">
        <div className="mb-2 block">
          <Label htmlFor="tags">Tags</Label>
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-1 min-h-[40px] w-full rounded-md border border-input bg-background px-2 py-1 focus-within:ring-1 focus-within:ring-primary">
            {tags.map((tag, index) => (
              <span
                key={index}
                className=" py-1 px-2 rounded-full text-primary bg-primary/5 flex items-center"
              >
                {tag}
                <X
                  onClick={() => handleTagDelete(tag)}
                  className="cursor-pointer ml-1"
                  size={12}
                />
              </span>
            ))}

            <input
              type="text"
              className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
              onFocus={handleTagInputChange}
              onKeyDown={handleTagInputKeyDown}
            />
          </div>

          <small className="text-xs text-muted-foreground">
            Add tags for products.
          </small>

          {showTagOptions && (
            <div>
              {tagOptions.map((option, index) => (
                <div
                  key={index}
                  className="py-2 px-3 cursor-pointer"
                  onClick={() => handleTagClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductData;
