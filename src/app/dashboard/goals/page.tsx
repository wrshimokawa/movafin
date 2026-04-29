'use client';

import { useState } from 'react';
import { PlusCircle, Target, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { DashboardHeader } from '@/components/dashboard-header';
import { mockGoals } from '@/lib/data';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

export default function GoalsPage() {
  const [date, setDate] = useState<Date | undefined>();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const calculateProgress = (current: number, target: number) => {
    if (target <= 0) return 0;
    return (current / target) * 100;
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader title="Metas" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Suas Metas</h2>
            <p className="text-muted-foreground">
              Acompanhe e gerencie seus objetivos financeiros.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Meta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Meta</DialogTitle>
                <DialogDescription>
                  Defina seu próximo grande objetivo financeiro.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome da Meta</Label>
                  <Input id="name" placeholder="Ex: Viagem dos sonhos" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="currentAmount">Valor Atual (R$)</Label>
                    <Input id="currentAmount" type="number" placeholder="0.00" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="targetAmount">Valor Alvo (R$)</Label>
                    <Input id="targetAmount" type="number" placeholder="10,000.00" />
                  </div>
                </div>
                  <div className="grid gap-2">
                  <Label>Data Alvo</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                </div>
                  <div className="grid gap-2">
                  <Label htmlFor="description">Descrição (Opcional)</Label>
                  <Textarea id="description" placeholder="Detalhes sobre sua meta..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Meta</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockGoals.map((goal) => {
            const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
            return (
              <Card key={goal.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{goal.name}</CardTitle>
                    <Target className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>
                    Até {format(goal.targetDate, "dd/MM/yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <Progress value={progress} aria-label={`${progress.toFixed(0)}% completo`} />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{formatCurrency(goal.currentAmount)}</span> de {formatCurrency(goal.targetAmount)}
                  </p>
                  {goal.description && (
                    <p className="mt-4 text-sm text-muted-foreground border-l-2 pl-3 pt-2">{goal.description}</p>
                  )}
                </CardContent>
                <CardFooter>
                    <p className="text-sm font-medium text-foreground w-full text-right">{progress.toFixed(2)}% alcançado</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}