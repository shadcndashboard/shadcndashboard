"use client";


import { BlogProvider } from "@/app/context/blog-context/index";
import BlogListing from "./blog-listing";

const BlogPost = () => {
  return (
    <>
      <BlogProvider>
        <BlogListing />
      </BlogProvider>
    </>
  );
};

export default BlogPost;
