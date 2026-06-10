import BreadcrumbComp from "@/app/(dashboard-layout)/layout/shared/breadcrumb/breadcrumb-comp";
import BlogDetailData from "@/app/components/apps/blog/detail";
import { BlogProvider } from "@/app/context/blog-context/index";
import type { Metadata } from "next";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";

export const metadata: Metadata = {
  title: "Blog Details",
};

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Blog Detail" },
];

const BlogDetail = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
      >
        <BreadcrumbComp title="Blog Detail" items={BCrumb} />
        <StyleDivider />
        <BlogDetailData />
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default BlogDetail;
