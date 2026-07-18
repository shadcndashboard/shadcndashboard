


import { BlogProvider } from "src/context/blog-context";
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
