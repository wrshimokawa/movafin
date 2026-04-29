import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <Logo className="text-primary" />
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Criar Conta</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline tracking-tight">
            Sua vida financeira, finalmente em ordem.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            MovaFin é a ferramenta intuitiva que faltava para você entender suas contas, controlar seus gastos e alcançar seus objetivos. Simples, visual e inteligente.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Comece agora, é grátis</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} MovaFin. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
