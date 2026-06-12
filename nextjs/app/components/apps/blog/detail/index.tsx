"use client";
import React, { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import { Circle, Eye, MessageSquare, Quote } from "lucide-react";
import { format } from "date-fns";
import { uniqueId } from "lodash";
import type { BlogType } from "../../../../(dashboard-layout)/types/apps/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import {
  BlogContext,
  BlogContextProps,
} from "../../../../context/blog-context/index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import BlogComment from "./blog-commnets";

const BlogDetailData = () => {
  const { posts, setLoading, addComment }: BlogContextProps =
    useContext(BlogContext);
  const pathName = usePathname();
  const getTitle = pathName.split("/").pop();
  const post = posts.find(
    (p) =>
      (p.title || "")
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") === getTitle
  );
  const [replyTxt, setReplyTxt] = React.useState("");

  const onSubmit = () => {
    if (!post || !post.id) return;
    const newComment = {
      id: uniqueId("#comm_"),
      profile: {
        id: uniqueId("#USER_"),
        avatar: post.author?.avatar || "",
        name: post.author?.name || "",
        time: "Now",
      },
      comment: replyTxt,
      replies: [],
    };
    addComment(Number(post.id), newComment);
    setReplyTxt("");
  };

  // skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {post ? (
        <>
          <Card className="py-0! overflow-hidden gap-0!">
            <div className="relative">
              <div className="overflow-hidden h-[450px]">
                <Image
                  src={post?.coverImg || ""}
                  alt="shadcn-admin"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <Badge

                className="absolute bottom-8 end-6 bg-muted text-muted-foreground"
              >
                2 min Read
              </Badge>
            </div>
            <div className="flex justify-between items-center -mt-7 px-6">
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar className="cursor-pointer h-10 w-10">
                        <AvatarImage
                          src={post?.author?.avatar}
                          alt={post?.author?.name}
                        />
                        <AvatarFallback>
                          {post?.author?.name?.charAt(0) ?? "?"}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{post?.author?.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Badge className="mt-3 " variant={"secondary"}>
                {post?.category}
              </Badge>
              <h2 className="md:text-4xl text-2xl my-6">{post?.title}</h2>
              <div>
                <div className="flex gap-3">
                  <div className="flex gap-2 items-center text-sm ">
                    <Eye size={18} />
                    {post?.view}
                  </div>
                  <div className="flex gap-2 items-center  text-sm">
                    <MessageSquare size={18} />{" "}
                    {post?.comments?.length || 0}
                  </div>
                  <div className="ms-auto flex gap-2 items-center   text-sm">
                    <Circle size={7} />
                    <small>
                      {post && post.createdAt
                        ? format(new Date(post.createdAt), "E, MMM d")
                        : ""}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="px-6 pb-6">
              <h2 className="md:text-3xl text-2xl pb-5">
                Title of the paragraph
              </h2>
              <p>
                But you cannot figure out what it is or what it can do. MTA web
                directory is the simplest way in which one can bid on a link, or
                a few links if they wish to do so. The link directory on MTA
                displays all of the links it currently has, and does so in
                alphabetical order, which makes it much easier for someone to
                find what they are looking for if it is something specific and
                they do not want to go through all the other sites and links as
                well. It allows you to start your bid at the bottom and slowly
                work your way to the top of the list
              </p>
              <br></br>
              <p>
                Gigure out what it is or what it can do. MTA web directory is
                the simplest way in which one can bid on a link, or a few links
                if they wish to do so. The link directory on MTA displays all of
                the links it currently has, and does so in alphabetical order,
                which makes it much easier for someone to find what they are
                looking for if it is something specific and they do not want to
                go through all the other sites and links as well. It allows you
                to start your bid at the bottom and slowly work your way to the
                top of the
              </p>
              <br></br>
              <p>
                <b>This is strong text.</b>
              </p>
              <i>This is italic text.</i>

              <Separator className="my-8" />
              <h3 className="text-xl mb-3">Unorder list</h3>
              <ul className="list-disc pl-6">
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
              </ul>
              <Separator className="my-8" />
              <h3 className="text-xl mb-3">Order list</h3>
              <ol className="list-decimal pl-6">
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
              </ol>
              <Separator className="my-8" />
              <h3 className="text-xl mb-3">Quotes</h3>
              <div className="pt-5 pb-4 px-4 rounded-md border-s-2 border-primary flex gap-1 items-start bg-primary/5">
                <Quote size={20} className="-mt-1" />
                <h2 className="text-base font-bold">
                  Life is short, Smile while you still have teeth!
                </h2>
              </div>
            </div>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                <h5 className="text-xl mb-2">Post Comments</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                rows={4}
                value={replyTxt}
                onChange={(e) => setReplyTxt(e.target.value)}
              ></Textarea>
              <Button
                variant={"default"}
                className="w-fit mt-3 rounded-md "
                onClick={onSubmit}
              >
                Post Comment
              </Button>
              <div className="mt-6">
                <div className="flex gap-3 items-center">
                  <h5 className="text-xl ">Comments</h5>
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-primary bg-primary/5 font-bold">
                    {post?.comments?.length || 0}
                  </div>
                </div>
                <div>
                  {post?.comments?.map((comment: BlogType) => {
                    return <BlogComment key={comment.id} comment={comment} />;
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <p className="text-xl text-center py-6 font-bold">No Post Found</p>
      )}
    </>
  );
};
export default BlogDetailData;
