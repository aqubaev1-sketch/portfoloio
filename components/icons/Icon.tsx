export default function Icon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-background group-hover:border-foreground/50 flex shrink-0 items-center justify-center rounded-md border p-1.5 transition-colors">
      {icon}
    </div>
  );
}
