import PageContainer from "@/components/PageContainer";
import { Metadata } from "next";
import { getAllBlogs } from "@/lib/mdx";
import BlogCard, { BlogFrontmatter } from "@/components/BlogCard";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/app/sections/Footer";
import PageHeading from "@/components/PageHeading";
import Divider from "@/components/Divider";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blogs",

  description:
    "Technical articles on software engineering, web development, AI, TypeScript, React, Next.js, backend development, and lessons learned while building products.",

  keywords: [
    "Programming Blog",
    "Developer Blog",
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "Software Engineering",
    "Backend",
    "Aman Verma",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    type: "website",
    title: "Blogs | Aman Verma",
    description: "Thoughts, tutorials, and lessons from building software.",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: "/og-blogs.jpg",
        width: 1200,
        height: 630,
        alt: "Aman Verma Blogs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blogs | Aman Verma",
    description: "Thoughts, tutorials, and lessons from building software.",
    images: ["/og-blogs.jpg"],
  },
};

export default async function Page() {
  const allBlogs = (await getAllBlogs()).sort(
    (a, b) =>
      new Date(b.publishedAt ?? 0).getTime() -
      new Date(a.publishedAt ?? 0).getTime(),
  );
  const total = allBlogs.length;

  return (
    <PageContainer>
      <PageNavbar title="Home" backHref="/" />
      <PageHeading
        title="Blogs"
        subtitle="I write sometimes when i build something or just wanna write down my thoughts."
      />
      <div className="relative">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {allBlogs.map((blog, idx) => (
            <div
              key={idx}
              className={cn(
                "px-8 py-6 md:px-16 md:py-8",
                idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
                idx === total - 1 ? "border-b-0" : "border-b",
                idx < 2 ? "md:border-b" : "md:border-b-0",
                idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
              )}
            >
              <BlogCard blog={blog as BlogFrontmatter} />
            </div>
          ))}
          {allBlogs.length === 0 && (
            <div className="col-span-full">
              <p className="text-muted-foreground mt-8 text-center">
                No blogs found.
              </p>
            </div>
          )}
        </div>
      </div>
      <Divider />
      <Footer />
    </PageContainer>
  );
}
