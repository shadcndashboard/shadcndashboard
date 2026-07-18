
import { useContext } from "react";
import { orderBy } from "lodash";

import { BlogContext } from "../../../context/blog-context";
import BlogFeaturedCard from "./blog-featuredcard";

import BlogCard from "./blog-card";
import { BlogPostType } from "src/types/apps/blog";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";

const BlogListing = () => {
  const { posts, sortBy } = useContext(BlogContext);

  // Function to filter blog posts based on sorting criteria
  const filterBlogs = (posts: BlogPostType[], sortBy: string) => {
    let filteredPosts = [...posts];

    if (sortBy === "newest") {
      filteredPosts = orderBy(filteredPosts, ["createdAt"], ["desc"]);
    } else if (sortBy === "oldest") {
      filteredPosts = orderBy(filteredPosts, ["createdAt"], ["asc"]);
    } else if (sortBy === "popular") {
      filteredPosts = orderBy(filteredPosts, ["view"], ["desc"]);
    }

    // Filter out featured posts
    return filteredPosts.filter((post) => !post.featured);
  };

  // Function to filter featured posts
  const filterFeaturedPosts = (posts: BlogPostType[]) => {
    return posts.filter((post) => post.featured);
  };

  const blogPosts = filterBlogs(posts, sortBy);
  const featuredPosts = filterFeaturedPosts(posts);

  return (
    <StyleAwareWrapper
      lyraClassName="grid grid-cols-12 gap-px"
      defaultClassName="grid grid-cols-12 gap-6">
      {featuredPosts.map((post, index) => {
        return <BlogFeaturedCard index={index} post={post} key={post.id} />;
      })}
      {blogPosts.map((post) => {
        return <BlogCard post={post} key={post.id} />;
      })}
    </StyleAwareWrapper>
  );
};
export default BlogListing;
