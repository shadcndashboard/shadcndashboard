"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TiptapEdit from "../editor/tiptap-edit";

const GeneralDetail = () => {
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
            <TiptapEdit />
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
