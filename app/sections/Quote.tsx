import { Quote as QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  author?: string;
}

export function Quote({
  text = "Ақырын жүріп, анық бас, еңбегің кетпес далаға",
  author = "- Абай Құнанбайұлы",
  className,
  ...props
}: QuoteProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl py-12 md:py-16",
        className,
      )}
      {...props}
    >
      <div className="border-border pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />

      <QuoteIcon className="fill-muted text-muted absolute top-8 left-6 z-0 h-32 w-32 rotate-180 opacity-100 md:top-10 md:left-10 md:h-48 md:w-48 dark:opacity-50" />

      <div className="relative z-10 flex flex-col space-y-4 px-8 py-6 md:px-20">
        <blockquote className="text-foreground font-sans text-base leading-relaxed italic md:text-xl">
          "{text}"
        </blockquote>

        <div className="text-muted-foreground text-right font-sans text-sm italic md:text-base">
          {author.startsWith("-") ? author : `- ${author}`}
        </div>
      </div>
    </div>
  );
}
