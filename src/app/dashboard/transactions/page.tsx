'use client';

import { useState } from 'react';
import { Filter, ListFilter, PlusCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { DashboardHeader } from '@/components/dashboard-header';
import { mockTransactions, mockAccounts, mockCategories } from '@/lib/data';
import type { Transaction } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AiCategorySuggester } from '@/components/ai-category-suggester';

export default function TransactionsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('expense');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [accountId, setAccountId] = useState<string | undefined>();
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [notes, setNotes] = useState('');

  const resetForm = () => {
    setDescription('');
    setAmount('');
    setTransactionType('expense');
    setDate(new Date());
    setAccountId(undefined);
    setCategoryId(undefined);
    setNotes('');
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    const foundCategory = mockCategories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
    if (foundCategory) {
      setCategoryId(foundCategory.id);
    }
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardHeader title="Transações" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="income">Receitas</TabsTrigger>
              <TabsTrigger value="expense">Despesas</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filtrar
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Ativas
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                  <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Adicionar Transação
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Adicionar Transação</DialogTitle>
                    <DialogDescription>
                      Preencha os detalhes da nova transação. Use a IA para sugerir categorias!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Input id="description" placeholder="Ex: Compras no mercado" value={description} onChange={(e) => setDescription(e.target.value)} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="amount">Valor (R$)</Label>
                        <Input id="amount" type="number" placeholder="150.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
                      </div>
                    </div>

                    <div className="grid gap-2">
                       <AiCategorySuggester
                        description={description}
                        amount={transactionType === 'expense' ? -Math.abs(parseFloat(amount) || 0) : Math.abs(parseFloat(amount) || 0)}
                        onCategorySelect={handleCategorySelect}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label>Categoria</Label>
                        <Select value={categoryId} onValueChange={setCategoryId}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                          <SelectContent>
                             {mockCategories.filter(c => c.type === transactionType || c.type === 'all').map(cat => (
                              <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                       <div className="grid gap-2">
                        <Label>Tipo</Label>
                        <Select value={transactionType} onValueChange={(value) => setTransactionType(value as 'income' | 'expense')}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="expense">Despesa</SelectItem>
                            <SelectItem value="income">Receita</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="grid gap-2">
                        <Label>Conta</Label>
                        <Select value={accountId} onValueChange={setAccountId}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a conta" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockAccounts.map(account => (
                              <SelectItem key={account.id} value={account.id}>{account.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                       <div className="grid gap-2">
                        <Label>Data</Label>
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
                              {date ? format(date, "dd/MM/yyyy") : <span>Selecione a data</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="notes">Observações</Label>
                      <Textarea id="notes" placeholder="Qualquer detalhe adicional..." value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="attachment">Anexo</Label>
                      <Input id="attachment" type="file" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Salvar Transação</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Transações</CardTitle>
                <CardDescription>
                  Gerencie suas receitas e despesas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descrição</TableHead>
                      <TableHead className="hidden sm:table-cell">Conta</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Data
                      </TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTransactions.map((transaction: Transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.category}
                          </div>
                        </TableCell>
                         <TableCell className="hidden sm:table-cell">
                          <Badge variant="outline">{mockAccounts.find(a => a.id === transaction.accountId)?.name}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {new Date(transaction.date).toLocaleDateString('pt-BR')}
                        </TableCell>
                        <TableCell
                          className={cn(
                            'text-right font-medium',
                            transaction.type === 'income'
                              ? 'text-emerald-500'
                              : 'text-rose-500'
                          )}
                        >
                          {formatCurrency(transaction.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
