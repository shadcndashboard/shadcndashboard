
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Status = () => {
  const statuses = ["Draft", "Schedule", "Publish", "Inactive"];
  const [selectedStatus, setSelectedStatus] = useState<string | null>(
    "Publish"
  );

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <h5 >Blog Status</h5>
              {selectedStatus === "Publish" ? (
                <span className="h-3 w-3 p-0 bg-chart-2 rounded-full" />
              ) : selectedStatus === "Schedule" ? (
                <span className="h-3 w-3 p-0 bg-secondary rounded-full" />
              ) : selectedStatus === "Draft" ? (
                <span className="h-3 w-3 p-0 bg-destructive rounded-full" />
              ) : (
                <span className="h-3 w-3 p-0 bg-chart-4 rounded-full" />
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Select
              value={selectedStatus}
              onValueChange={(value) => {
                setSelectedStatus(value);
              }}
              defaultValue={"Select status"}

            >
              <SelectTrigger className="w-full" id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <small className="text-xs text-muted-foreground">
              Set the blog status.
            </small>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Status;
