import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  readingTime: string;
  tags?: string[];
  image?: string;
}

export default function BlogCard({ blog }: { blog: BlogFrontmatter }) {
  return (
    <a href={`/blog/${blog.slug}`} className="block h-full">
      <Card className="group/card relative mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-transparent pt-0 shadow-none ring-0 transition-colors duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
          />
        </div>

        <CardHeader className="flex flex-1 flex-col gap-2 pt-1">
          <div className="text-muted-foreground flex items-center gap-2 text-[11px]">
            <span>{blog.publishedAt}</span>
            <span>·</span>
            <span>{blog.readingTime}</span>
          </div>

          <CardTitle className="text-foreground line-clamp-2 text-sm leading-snug font-medium tracking-tight">
            {blog.title}
          </CardTitle>

          <CardDescription className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {blog.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}
