import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Producttemplate = () => {
  return (
    <>
      <Card className="p-6">
        <h5 className="text-base">Product Template</h5>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="temp">
              Select a product template{" "}
              <span className="text-destructive">*</span>
            </Label>
          </div>
          <Select required>
            <SelectTrigger id="temp" className="w-full cursor-pointer">
              <SelectValue>Default Template</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="cursor-pointer" value="default">Default Template</SelectItem>
              <SelectItem className="cursor-pointer" value="fashion">Fashion</SelectItem>
              <SelectItem className="cursor-pointer" value="stationary">Office Stationary</SelectItem>
              <SelectItem className="cursor-pointer" value="electronics">Electronics</SelectItem>
            </SelectContent>
          </Select>
          <small className="text-xs text-muted-foreground">
            Assign a template from your current theme to define how a single
            product is displayed.
          </small>
        </div>
      </Card>
    </>
  );
};

export default Producttemplate;
