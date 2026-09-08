import Heading from "@/components/Heading";
import BlogCard, { BlogFrontmatter } from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

export default async function Blogs() {
  const allBlogs = (await getAllBlogs())
    .sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime(),
    )
    .slice(0, 2);

  return (
    <>
      <Heading title="Blogs" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {allBlogs.map((blog, idx) => (
          <div
            key={idx}
            className={cn(
              "px-8 py-6 md:px-16 md:py-8",
              idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
              idx < allBlogs.length - 1 ? "border-b md:border-b-0" : "",
              idx % 2 === 0 && idx < allBlogs.length - 1
                ? "md:border-r"
                : "md:border-r-0",
            )}
          >
            <BlogCard blog={blog as BlogFrontmatter} />
          </div>
        ))}
      </div>
      <HeadingButton title={"View All Blogs"} href={"/blog"} />
    </>
  );
}
