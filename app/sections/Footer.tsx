import ViewsCount from "@/components/VisitorCounter";

export default function Footer() {
  return (
    <footer className="text-muted-foreground relative flex w-full flex-col items-center justify-center pt-20 pb-0 text-center text-sm">
      <div className="mb-20">
        <p className="mb-2">
          Designed & Developed by{" "}
          <span className="text-foreground font-medium">Aisultan</span>
        </p>
        <p>&copy; 2026 All rights reserved.</p>
        <ViewsCount />
      </div>
    </footer>
  );
}
