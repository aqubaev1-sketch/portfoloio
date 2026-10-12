import React from "react";

export default function LinkIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title="Live Website"
      className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 items-center justify-center rounded-md border transition-colors active:translate-y-px"
    >
      {icon}
    </a>
  );
}
