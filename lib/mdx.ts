import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  image?: string;
  tags?: string[];
}

export const getBlog = async (slug: string) => {
  try {
    const blogContent = await fs.readFile(
      path.join(process.cwd(), `content/blogs/${slug}.mdx`),
      "utf8",
    );

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source: blogContent,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (e) {
    return null;
  }
};

export const getAllBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "content/blogs"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getFrontmatterBySlug(slug);
      
      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return allBlogs;
};

export const getFrontmatterBySlug = async (slug: string) => {
  try {
    const blogContent = await fs.readFile(
      path.join(process.cwd(), `content/blogs/${slug}.mdx`),
      "utf8",
    );

    const { frontmatter } = await compileMDX<BlogFrontmatter>({
      source: blogContent,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (e) {
    return null;
  }
};
