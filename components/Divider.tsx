import { cn } from "@/lib/utils";

export default function Divider({ height = "h-20" }: { height?: string }) {
  return (
    <div className={cn("relative w-full", height)}>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
    </div>
  );
}