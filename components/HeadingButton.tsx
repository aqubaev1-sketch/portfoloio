import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
export default function HeadingButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "relative flex items-center justify-center px-8 md:px-12",
        )}
      >
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <div className="p-4">
          <div className="hover:bg-accent rounded-xl p-1 outline-1 transition-colors duration-300">
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-lg px-4 py-2"
            >
              {title}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
