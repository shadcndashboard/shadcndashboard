"use client";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogContext } from "@/app/context/blog-context";
import { Label } from "@/components/ui/label";

const GeneralDetail = () => {
  const { posts } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (posts.length > 0) {
      const firstPost = posts[0];
      setTitle(firstPost.title || "");
      setContent(firstPost.content || "");
    }
  }, [posts]);
  console.log(title);

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
            <div className="mb-2">
              <Label htmlFor="prednm ">
                Blog Title <span className="text-destructive ">*</span>
              </Label>
            </div>
            <Input
              id="prednm"
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <small className="text-xs  text-muted-foreground">
              A blog title is required and recommended to be unique.
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="desc">Content</Label>
            </div>
            <Textarea
              id="comment"
              placeholder="Blog Content..."
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <small className="text-xs text-muted-foreground ">
              Set a Content to the blog for better visibility.
            </small>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GeneralDetail;
