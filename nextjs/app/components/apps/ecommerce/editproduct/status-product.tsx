"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Status = () => {
  const [selectedStatus, setSelectedStatus] = useState("Publish");

  return (
    <>
      <Card className="p-6">
        <div className="flex justify-between items-center ">
          <h5 className="text-base">Status</h5>
          {selectedStatus === "Publish" ? (
            <Badge className="h-3 w-3 p-0 bg-chart-2"></Badge>
          ) : selectedStatus === "Schedule" ? (
            <Badge variant="secondary" className="h-3 w-3 p-0"></Badge>
          ) : selectedStatus === "Draft" ? (
            <Badge variant="destructive" className="h-3 w-3 p-0"></Badge>
          ) : (
            <Badge className="h-3 w-3 p-0 bg-chart-4"></Badge>
          )}
        </div>
        <div>

          <Select
            value={selectedStatus}
            onValueChange={(value) => setSelectedStatus(value as string)}
            defaultValue={"Select status"}
          >
            <SelectTrigger id="status" className="w-full cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className={"cursor-pointer"} value="Draft">Draft</SelectItem>
              <SelectItem className={"cursor-pointer"} value="Schedule">Schedule</SelectItem>
              <SelectItem className={"cursor-pointer"} value="Publish">Publish</SelectItem>
              <SelectItem className={"cursor-pointer"} value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <small className="text-xs text-muted-foreground ">
            Set the product status.
          </small>
        </div>
      </Card>
    </>
  );
};

export default Status;
