"use client";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import { ProductContext } from "@/app/context/ecommerce-context";
import { CloudUpload } from 'lucide-react';

const Media = () => {
  const { products } = useContext(ProductContext);
  const coverImage = products.length > 0 ? products[0].photo : null;

  return (
    <>
      <Card className="p-6">
        <h5 className="text-base">Media</h5>

        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary bg-primary/5"
          >
            {coverImage ? (
              <img
                src={coverImage}
                alt="Cover"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <CloudUpload
                  size={32}
                  className="mb-3 text-primary "
                />
                <p className="mb-2 text-sm text-primary ">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-primary ">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            )}
            <Input type="file" id="dropzone-file" className="hidden" />
          </Label>
        </div>
        {/* <FileUploadMotion /> */}
      </Card>
    </>
  );
};

export default Media;
