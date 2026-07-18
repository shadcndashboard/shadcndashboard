import BlogDetailData from "@/components/apps/blog/detail";
import { BlogProvider } from "src/context/blog-context";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Blog Detail" },
];

const BlogDetail = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
        defaultClassName="flex flex-col gap-4"
      >
        <BreadcrumbComp title="Blog Detail" items={BCrumb} />
        <StyleDivider />
        <BlogDetailData />
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default BlogDetail;
