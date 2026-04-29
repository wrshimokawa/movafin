
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';
import { AiExplainer } from '@/components/ai-explainer';

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
      </div>
      <div className="flex items-center gap-4">
        <AiExplainer />
        <UserNav />
      </div>
    </header>
  );
}
