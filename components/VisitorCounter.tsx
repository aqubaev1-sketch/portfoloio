"use client";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewsCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function loadCount() {
      const res = await fetch("/api/visitor");
      const data = await res.json();

      setCount(data.count);
    }
    loadCount();
  }, []);

  return (
    <div className="border-border/40 bg-muted/30 text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition-all">
      <Eye className="h-3.5 w-3.5" />
      <span>{count > 0 ? count.toLocaleString() : "..."} Views</span>
    </div>
  );
}
