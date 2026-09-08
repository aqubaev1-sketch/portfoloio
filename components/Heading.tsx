import React from "react";
import { cn } from "@/lib/utils";

export default function Heading({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-between px-8 md:px-12">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <h1 className={cn("font-heading relative z-10 py-2 text-3xl", className)}>
        {title}
      </h1>
      {children}
    </div>
  );
}
