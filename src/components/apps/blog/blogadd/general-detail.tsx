
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TiptapEdit from "../editor/tiptap-edit";



const GeneralDetail = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h5>Blog Details</h5>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="prednm">
                Blog Title
                <span className="text-destructive ">*</span>
              </Label>
            </div>
            <Input id="prednm" type="text" placeholder="Blog Title" />
            <small className="text-xs text-muted-foreground">
              A blog title is required and recommended to be unique.
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="desc">Content</Label>
            </div>
            <TiptapEdit />
            <small className="text-xs  text-muted-foreground">
              Set a Content to the blog for better visibility.
            </small>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GeneralDetail;
