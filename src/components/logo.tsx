import { AppIcon } from "@/components/app-icon";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <AppIcon className="h-7 w-7 shrink-0" />
      <span className="text-xl font-bold font-headline">MovaFin</span>
    </div>
  );
}
