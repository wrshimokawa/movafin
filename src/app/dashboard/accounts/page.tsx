'use client';

import { useState } from 'react';
import { DollarSign, Landmark, PlusCircle } from 'lucide-react';
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
import { mockAccounts, mockAccountTypes } from '@/lib/data';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const accountFormSchema = z.object({
  name: z.string().min(1, { message: 'O nome da conta é obrigatório.' }),
  type: z.string({ required_error: 'O tipo da conta é obrigatório.' }),
  balance: z.coerce
    .number()
    .min(0, { message: 'O saldo inicial não pode ser negativo.' }),
});

export default function AccountsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: '',
      balance: 0,
    },
  });

  function onSubmit(values: z.infer<typeof accountFormSchema>) {
    // TODO: Implementar a lógica para salvar a conta no Firestore
    console.log(values);
    setIsOpen(false); // Fecha o dialog após o submit
    form.reset();
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader title="Contas" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Suas Contas</h2>
            <p className="text-muted-foreground">
              Visualize e gerencie suas contas financeiras.
            </p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Conta
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Nova Conta</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da sua nova conta.
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
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Conta Principal"
                            className="col-span-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-4 text-right" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Tipo</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {mockAccountTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="col-span-4 text-right" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="balance"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">Saldo Inicial</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0,00"
                            className="col-span-3"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-4 text-right" />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="submit">Salvar Conta</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockAccounts.map((account) => (
            <Card key={account.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <CardDescription>
                    {
                      mockAccountTypes.find((t) => t.id === account.type)
                        ?.name
                    }
                  </CardDescription>
                </div>
                <Landmark className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(account.balance)}
                </div>
                {account.bank && (
                  <p className="text-xs text-muted-foreground">
                    {account.bank}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
