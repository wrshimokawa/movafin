import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';
import { AiExplainer } from '@/components/ai-explainer';
import { Badge } from '@/components/ui/badge';

type DashboardHeaderProps = {
  title: string;
};

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const isUsingEmulators = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true';

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        {isUsingEmulators && (
          <Badge variant="outline" className="hidden sm:flex bg-amber-500/10 text-amber-600 border-amber-500/20 gap-1 font-normal">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            DB Local (Emulador)
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-4">
        <AiExplainer />
        <UserNav />
      </div>
    </header>
  );
}
