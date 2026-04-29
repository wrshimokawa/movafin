'use client';

import { useState } from 'react';
import { PlusCircle, Target, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const goalFormSchema = z
  .object({
    name: z.string().min(1, { message: 'O nome da meta é obrigatório.' }),
    currentAmount: z.coerce
      .number()
      .min(0, { message: 'O valor atual não pode ser negativo.' }),
    targetAmount: z.coerce
      .number()
      .positive({ message: 'O valor alvo deve ser maior que zero.' }),
    targetDate: z.date({ required_error: 'A data alvo é obrigatória.' }),
    description: z.string().optional(),
  })
  .refine((data) => data.targetAmount > data.currentAmount, {
    message: 'O valor alvo deve ser maior que o valor atual.',
    path: ['targetAmount'],
  });

export default function GoalsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof goalFormSchema>>({
    resolver: zodResolver(goalFormSchema),
    defaultValues: {
      name: '',
      currentAmount: 0,
      targetAmount: 1000,
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof goalFormSchema>) {
    // TODO: Implementar a lógica para salvar a meta no Firestore
    console.log(values);
    setIsOpen(false);
    form.reset();
  }

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
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4 py-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel>Nome da Meta</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Viagem dos sonhos" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="currentAmount"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel>Valor Atual (R$)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="targetAmount"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel>Valor Alvo (R$)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="targetDate"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel>Data Alvo</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full justify-start text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, 'PPP', { locale: ptBR })
                                ) : (
                                  <span>Selecione uma data</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              locale={ptBR}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel>Descrição (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Detalhes sobre sua meta..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="submit">Salvar Meta</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockGoals.map((goal) => {
            const progress = calculateProgress(
              goal.currentAmount,
              goal.targetAmount
            );
            return (
              <Card key={goal.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{goal.name}</CardTitle>
                    <Target className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>
                    Até {format(goal.targetDate, 'dd/MM/yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <Progress
                    value={progress}
                    aria-label={`${progress.toFixed(0)}% completo`}
                  />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {formatCurrency(goal.currentAmount)}
                    </span>{' '}
                    de {formatCurrency(goal.targetAmount)}
                  </p>
                  {goal.description && (
                    <p className="mt-4 text-sm text-muted-foreground border-l-2 pl-3 pt-2">
                      {goal.description}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium text-foreground w-full text-right">
                    {progress.toFixed(2)}% alcançado
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
