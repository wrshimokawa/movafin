
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';
import { AiExplainer } from '@/components/ai-explainer';
import { Badge } from '@/components/ui/badge';
import { Cloud } from 'lucide-react';

type DashboardHeaderProps = {
  title: string;
};

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        <Badge variant="outline" className="hidden sm:flex gap-1 items-center border-primary/20 bg-primary/5 text-primary text-[10px] font-medium">
          <Cloud className="h-3 w-3" />
          Cloud Connected
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <AiExplainer />
        <UserNav />
      </div>
    </header>
  );
}
