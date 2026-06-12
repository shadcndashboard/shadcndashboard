"use client";
import { Card } from "@/components/ui/card";
import FileUploadMotion from "@/app/components/animated-components/file-uploadmotion";
const Media = () => {
  return (
    <>
      <Card className="p-6">
        <h5 className=" mb-4">Media</h5>
        <FileUploadMotion />
      </Card>
    </>
  );
};

export default Media;
