import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ConnectBtn({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "outline", size: "sm" }),
        "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent px-2.5 shadow-none transition-colors sm:px-4",
      )}
    >
      {icon} <span className="hidden sm:inline">{title}</span>
    </a>
  );
}
