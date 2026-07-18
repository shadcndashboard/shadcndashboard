import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import { BlogProvider } from "src/context/blog-context";
import CategoryTags from "@/components/apps/blog/blogedit/category-tags";
import GeneralDetail from "@/components/apps/blog/blogedit/general-detail";
import { Button } from "@/components/ui/button";
import PostDate from "@/components/apps/blog/blogedit/post-date";
import Media from "@/components/apps/blog/blogedit/medias";
import Status from "@/components/apps/blog/blogedit/blog-status";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Blog Edit" },
];

const BlogEdit = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
        defaultClassName="flex flex-col gap-4"
      >
        <BreadcrumbComp title="Blog Edit" items={BCrumb} />
        <StyleDivider />
        <StyleAwareWrapper
          lyraClassName="grid grid-cols-12 gap-px bg-border"
          defaultClassName="grid grid-cols-12 gap-[30px]"
        >
          <div className="lg:col-span-8 col-span-12">
            <StyleAwareWrapper
              lyraClassName="flex flex-col gap-px bg-border"
              defaultClassName="flex flex-col gap-[30px]"
            >
              <GeneralDetail />
              <Media />
            </StyleAwareWrapper>
          </div>
          <div className="lg:col-span-4 col-span-12 self-stretch">
            <StyleAwareWrapper
              lyraClassName="flex flex-col gap-px bg-border h-full"
              defaultClassName="flex flex-col gap-[30px]"
            >
              <Status />
              <CategoryTags />
              <div className="flex-1 flex flex-col">
                <PostDate />
              </div>
            </StyleAwareWrapper>
          </div>
          <StyleAwareWrapper
            lyraClassName="bg-background col-span-12 p-4"
            defaultClassName="lg:col-span-8 col-span-12"
          >
            <div className="flex gap-3">
              <Button className="sm:mb-0 mb-3 w-fit">Save changes</Button>
              <Button variant={"destructive"}>Cancel</Button>
            </div>
          </StyleAwareWrapper>
        </StyleAwareWrapper>
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default BlogEdit;
