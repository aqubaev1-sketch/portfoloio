import PageContainer from "@/components/PageContainer";
import { getBlog } from "@/lib/mdx";
import { notFound, redirect } from "next/navigation";
import PageNavbar from "@/components/PageNavbar";
import { format } from "date-fns";
import Footer from "@/app/sections/Footer";
import Divider from "@/components/Divider";
import { generateBlogMetadata } from "@/lib/generateBlogMetadata";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return generateBlogMetadata(slug, blog.frontmatter);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blogContent = await getBlog(slug);

  if (!blogContent) {
    redirect("/blog");
  }

  const { content, frontmatter } = blogContent;

  return (
    <PageContainer>
      <PageNavbar backHref="/blog" title="Blogs" />
      <div className="mx-auto w-full max-w-full">
        <header className="relative w-full">
          <div className="relative px-8 py-6 md:px-16">
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
            <h1 className="font-heading relative z-10 text-3xl tracking-tight md:text-4xl">
              {frontmatter.title}
            </h1>
          </div>

          <div className="relative px-8 py-3 md:px-16">
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
            <div className="text-muted-foreground relative z-10 flex items-center gap-3 text-sm">
              {frontmatter.publishedAt && (
                <time
                  dateTime={frontmatter.publishedAt}
                  className="flex items-center gap-1.5"
                >
                  {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")}
                </time>
              )}
              {frontmatter.publishedAt && frontmatter.readingTime && (
                <span>&middot;</span>
              )}
              {frontmatter.readingTime && (
                <span className="flex items-center gap-1.5">
                  {frontmatter.readingTime}
                </span>
              )}
            </div>
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="relative px-8 py-4 md:px-16">
              <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
              <div className="relative z-10 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary/50 text-secondary-foreground border-border/50 rounded-full border px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="px-8 pt-2 pb-16 md:px-16">
          <article className="prose prose-neutral dark:prose-invert prose-headings:font-heading prose-headings:font-normal prose-h2:text-3xl prose-h2:tracking-tight prose-h3:text-2xl prose-h3:tracking-tight prose-h4:text-xl prose-h4:tracking-tight prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:border prose-img:max-h-125 prose-img:w-auto prose-img:mx-auto prose-img:object-contain prose-pre:bg-secondary/50 prose-pre:text-foreground prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl [&_:is(h2,h3)::before]:border-border w-full max-w-none [&_:is(h2,h3)]:relative [&_:is(h2,h3)]:mt-8 [&_:is(h2,h3)]:pt-6 [&_:is(h2,h3)::before]:absolute [&_:is(h2,h3)::before]:top-0 [&_:is(h2,h3)::before]:left-1/2 [&_:is(h2,h3)::before]:w-screen [&_:is(h2,h3)::before]:-translate-x-1/2 [&_:is(h2,h3)::before]:border-t [&_:is(h2,h3)::before]:content-[''] [&>h1:first-child]:hidden">
            {content}
          </article>
        </div>
      </div>
      <Divider />
      <Footer />
    </PageContainer>
  );
}
