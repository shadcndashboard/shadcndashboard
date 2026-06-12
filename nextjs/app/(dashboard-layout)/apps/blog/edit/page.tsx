import BreadcrumbComp from "@/app/(dashboard-layout)/layout/shared/breadcrumb/breadcrumb-comp";
import { BlogProvider } from "@/app/context/blog-context/index";
import type { Metadata } from "next";
import CategoryTags from "@/app/components/apps/blog/blogedit/category-tags";
import GeneralDetail from "@/app/components/apps/blog/blogedit/general-detail";
import { Button } from "@/components/ui/button";
import PostDate from "@/app/components/apps/blog/blogedit/post-date";
import Media from "@/app/components/apps/blog/blogedit/medias";
import Status from "@/app/components/apps/blog/blogedit/blog-status";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";

export const metadata: Metadata = {
  title: "Blog Edit",
};

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Blog Edit" },
];

const BlogEdit = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
      >
        <BreadcrumbComp title="Blog Edit" items={BCrumb} />
        <StyleDivider />
        <div className="grid grid-cols-12 gap-px">
          <div className="lg:col-span-8 col-span-12">
            <div className="flex flex-col gap-px">
              <GeneralDetail />
              <Media />
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 self-stretch">
            <div className="flex flex-col gap-px h-full">
              <Status />
              <CategoryTags />
              <div className="flex-1 flex flex-col">
                <PostDate />
              </div>
            </div>
          </div>
          <div className="col-span-12 bg-background">
            <div className="flex gap-3 p-4">
              <Button className="sm:mb-0 mb-3 w-fit">Save changes</Button>
              <Button variant={"destructive"}>Cancel</Button>
            </div>
          </div>
        </div>
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default BlogEdit;
