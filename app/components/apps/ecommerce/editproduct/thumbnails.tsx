"use client";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";

const Thumbnail = () => {
  return (
    <>
      <Card className="p-6">
        <h5 className="text-base">Thumbnail</h5>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex  w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-primary bg-primary/5"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <CloudUpload
                size={30}
                className="mb-3 "
              />
              <p className="mb-2 text-sm ">Drop Thumbnail here to upload</p>
            </div>
            <Input type="file" id="dropzone-file" className="hidden" />
          </Label>
        </div>
        <small className="text-xs  text-center text-muted-foreground">
          Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
          files are accepted.
        </small>
      </Card>
    </>
  );
};

export default Thumbnail;
