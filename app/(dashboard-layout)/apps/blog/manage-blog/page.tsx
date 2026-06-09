import BreadcrumbComp from "@/app/(dashboard-layout)/layout/shared/breadcrumb/breadcrumb-comp";
import { BlogProvider } from "@/app/context/blog-context/index";
import type { Metadata } from "next";
import ManageBlogTable from "@/app/components/apps/blog/blogtable/manage-blogtable";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";

export const metadata: Metadata = {
  title: "Manage Blog ",
};

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Manage Blog" },
];

const MangeBlog = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
      >
        <BreadcrumbComp title=" Manage Blog" items={BCrumb} />
        <StyleDivider />
        <ManageBlogTable />
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default MangeBlog;
