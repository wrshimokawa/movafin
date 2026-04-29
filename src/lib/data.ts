import type { User, Account, Transaction, Category, Goal } from './types';

export const mockUser: User = {
  id: 'user-1',
  name: 'Ana Silva',
  email: 'ana.silva@email.com',
};

export const mockAccountTypes = [
  { id: 'checking', name: 'Conta Corrente' },
  { id: 'savings', name: 'Poupança' },
  { id: 'investment', name: 'Investimento' },
  { id: 'cash', name: 'Dinheiro' },
  { id: 'other', name: 'Outro' },
];

export const mockAccounts: Account[] = [
  { id: 'acc-1', userId: 'user-1', name: 'Banco Principal', type: 'checking', balance: 5230.50, bank: 'Banco A' },
  { id: 'acc-2', userId: 'user-1', name: 'Poupança Futuro', type: 'savings', balance: 12800.00, bank: 'Banco B' },
  { id: 'acc-3', userId: 'user-1', name: 'Carteira', type: 'cash', balance: 350.00 },
];

export const mockCategories: Category[] = [
  { id: 'cat-1', userId: 'user-1', name: 'Salário', type: 'income' },
  { id: 'cat-2', userId: 'user-1', name: 'Alimentação', type: 'expense' },
  { id: 'cat-3', userId: 'user-1', name: 'Moradia', type: 'expense' },
  { id: 'cat-4', userId: 'user-1', name: 'Transporte', type: 'expense' },
  { id: 'cat-5', userId: 'user-1', name: 'Lazer', type: 'expense' },
  { id: 'cat-6', userId: 'user-1', name: 'Saúde', type: 'expense' },
  { id: 'cat-7', userId: 'user-1', name: 'Investimentos', type: 'expense' },
  { id: 'cat-8', userId: 'user-1', name: 'Outros', type: 'all' },
];

export const mockTransactions: Transaction[] = [
  { id: 'txn-1', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 1)), description: 'Salário Mensal', amount: 7500, type: 'income', category: 'Salário' },
  { id: 'txn-2', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 2)), description: 'Supermercado da Semana', amount: -450.75, type: 'expense', category: 'Alimentação' },
  { id: 'txn-3', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 3)), description: 'Aluguel', amount: -2500, type: 'expense', category: 'Moradia' },
  { id: 'txn-4', userId: 'user-1', accountId: 'acc-3', date: new Date(new Date().setDate(new Date().getDate() - 3)), description: 'Almoço', amount: -25.50, type: 'expense', category: 'Alimentação' },
  { id: 'txn-5', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 4)), description: 'Cinema', amount: -55, type: 'expense', category: 'Lazer' },
  { id: 'txn-6', userId: 'user-1', accountId: 'acc-2', date: new Date(new Date().setDate(new Date().getDate() - 5)), description: 'Aporte Mensal', amount: -1000, type: 'expense', category: 'Investimentos' },
  { id: 'txn-7', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 6)), description: 'Uber', amount: -32.80, type: 'expense', category: 'Transporte' },
  { id: 'txn-8', userId: 'user-1', accountId: 'acc-1', date: new Date(new Date().setDate(new Date().getDate() - 7)), description: 'Farmácia', amount: -120.00, type: 'expense', category: 'Saúde' },
];

export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    userId: 'user-1',
    name: 'Viagem para o Japão',
    targetAmount: 30000,
    currentAmount: 7500,
    targetDate: new Date('2025-10-01'),
    description: 'Economizar para uma viagem de 15 dias explorando Tokyo e Kyoto.'
  },
  {
    id: 'goal-2',
    userId: 'user-1',
    name: 'Entrada do Apartamento',
    targetAmount: 50000,
    currentAmount: 28000,
    targetDate: new Date('2024-12-31'),
  },
  {
    id: 'goal-3',
    userId: 'user-1',
    name: 'Carro Novo',
    targetAmount: 80000,
    currentAmount: 15000,
    targetDate: new Date('2026-06-30'),
    description: 'Trocar o carro atual por um modelo mais novo e seguro.'
  }
];
