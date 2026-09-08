import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleX({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background relative left-1/2 z-20 h-4 w-screen -translate-x-1/2 overflow-hidden md:h-6",
        className,
      )}
    >
      <Scales size={6} orientation="diagonal" />
    </div>
  );
}
