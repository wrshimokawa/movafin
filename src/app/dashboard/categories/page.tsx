'use client';
import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardHeader } from '@/components/dashboard-header';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockCategories, mockAccountTypes } from '@/lib/data';
import type { Category } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

function CategoryList({ title, description, items, onAddItem, type }: { title: string, description: string, items: any[], onAddItem: (item: any) => void, type: 'transaction' | 'account' }) {
  const [newItemName, setNewItemName] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = type === 'transaction'
        ? { id: `new-${Date.now()}`, name: newItemName, type: transactionType }
        : { id: `new-${Date.now()}`, name: newItemName };
      onAddItem(newItem);
      setNewItemName('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-start gap-2 mb-4">
          <div className="grid flex-1 gap-2">
            <Label htmlFor={`${type}-name`} className="sr-only">Nome</Label>
            <Input id={`${type}-name`} value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="Nome da nova categoria" />
          </div>
          {type === 'transaction' && (
            <div className="grid gap-2">
              <Label htmlFor="type" className="sr-only">Tipo</Label>
              <Select value={transactionType} onValueChange={setTransactionType}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="expense">Despesa</SelectItem>
                  <SelectItem value="income">Receita</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <Button onClick={handleAddItem}>
            <PlusCircle className="h-4 w-4" />
            <span className="sr-only">Adicionar</span>
          </Button>
        </div>
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border p-3">
              <span className="font-medium">{item.name}</span>
              {type === 'transaction' && (
                <Badge variant={item.type === 'income' ? 'default' : 'secondary'} className={item.type === 'income' ? 'bg-emerald-500/20 text-emerald-700 border-transparent' : 'bg-rose-500/20 text-rose-700 border-transparent'}>
                  {item.type === 'income' ? 'Receita' : 'Despesa'}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


export default function CategoriesPage() {
  const [transactionCategories, setTransactionCategories] = useState<Category[]>(mockCategories);
  const [accountTypes, setAccountTypes] = useState(mockAccountTypes);

  const handleAddTransactionCategory = (item: Category) => {
    setTransactionCategories(prev => [item, ...prev]);
  };

  const handleAddAccountType = (item: {id: string, name: string}) => {
    setAccountTypes(prev => [item, ...prev]);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader title="Categorias" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Tabs defaultValue="transactions">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="transactions">Tipos de Lançamento</TabsTrigger>
            <TabsTrigger value="accounts">Tipos de Conta</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <CategoryList
              title="Tipos de Lançamento"
              description="Gerencie as categorias para suas receitas e despesas."
              items={transactionCategories}
              onAddItem={handleAddTransactionCategory}
              type="transaction"
            />
          </TabsContent>
          <TabsContent value="accounts">
             <CategoryList
              title="Tipos de Conta"
              description="Gerencie os tipos para suas contas (ex: Conta Corrente, Carteira)."
              items={accountTypes}
              onAddItem={handleAddAccountType}
              type="account"
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
