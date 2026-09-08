import React from "react";
import { cn } from "@/lib/utils";

export default function PageHeading({
  title,
  className,
  children,
  subtitle,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="relative">
      <div className="relative px-8 py-4 md:px-12">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <h1 className={cn("font-heading relative z-10 text-3xl", className)}>
          {title}
        </h1>
        {children}
      </div>

      {subtitle && (
        <div className="relative px-8 py-3 md:px-12">
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
          <p className="text-muted-foreground relative z-10 text-sm">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
