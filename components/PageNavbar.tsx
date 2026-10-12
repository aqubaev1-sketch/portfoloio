"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import useSound from "use-sound";

interface BlogNavbarProps {
  title?: string;
  backHref?: string;
}

export default function PageNavbar({
  title = "Blogs",
  backHref = "/",
}: BlogNavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggle] = useSound("/sounds/toggle.mp3");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background relative z-30 w-full">
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="flex w-full items-center justify-between px-8 py-3 md:px-11">
        <Link
          href={backHref}
          className="text-muted-foreground hover:text-foreground ml-2 flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="truncate">Back to {title}</span>
        </Link>

        {mounted ? (
          <AnimatedThemeToggler
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            onClick={() => toggle()}
            variant="square"
            className="hover:bg-muted m-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0 [&>svg]:h-3.5 [&>svg]:w-3.5"
          />
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>
    </div>
  );
}
