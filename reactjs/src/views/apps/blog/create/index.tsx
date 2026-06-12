import GeneralDetail from "@/components/apps/blog/blogadd/general-detail";
import CategoryTags from "@/components/apps/blog/blogadd/category-tags";
import PostDate from "@/components/apps/blog/blogadd/post-date";
import { Button } from "@/components/ui/button";
import Media from "@/components/apps/blog/blogadd/medias";
import Status from "@/components/apps/blog/blogadd/blog-status";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Blog Create" },
];

const BlogCreate = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
      defaultClassName="flex flex-col gap-4"
    >
      <BreadcrumbComp title="Blog Create" items={BCrumb} />
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
        <div className="lg:col-span-4 col-span-12">
          <StyleAwareWrapper
            lyraClassName="flex flex-col gap-px bg-border h-full"
            defaultClassName="flex flex-col gap-[30px]"
          >
            <Status />
            <CategoryTags />
            <PostDate />
          </StyleAwareWrapper>
        </div>
        <StyleAwareWrapper
          lyraClassName="bg-background col-span-12 p-4"
          defaultClassName="lg:col-span-8 col-span-12"
        >
          <div className="flex gap-3">
            <Button className="sm:mb-0 mb-3 w-fit">Add Blog</Button>
            <Button variant={"destructive"}>Cancel</Button>
          </div>
        </StyleAwareWrapper>
      </StyleAwareWrapper>
    </StyleAwareWrapper>
  );
};

export default BlogCreate;
