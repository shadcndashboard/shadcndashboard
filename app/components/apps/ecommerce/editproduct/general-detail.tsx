"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useContext, useEffect, useState } from "react";
import TiptapEdit from "../editor/tiptap-edit";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProductContext } from "@/app/context/ecommerce-context";
import { Textarea } from "@/components/ui/textarea";

const GeneralDetail = () => {
  const { products } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (products?.length > 0) {
      const firstPost = products[0];
      setTitle(firstPost.title || "");
      setContent(firstPost.description || "");
    }
  }, [products]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h5>General</h5>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="prednm">
                Product Name <span className="text-destructive">*</span>
              </Label>
            </div>
            <Input
              id="prednm"
              type="text"
              value={title}

              placeholder="Product Name"
            />
            <small className="text-xs text-muted-foreground">
              A product name is required and recommended to be unique.
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="desc">Description</Label>
            </div>
            <Textarea
              id="comment"
              placeholder="Blog Content..."
              rows={5}
              value={content}
            />
            <small className="text-xs text-muted-foreground">
              Set a description to the product for better visibility.
            </small>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GeneralDetail;
