export type User = {
  id: string;
  name: string;
  email: string;
};

export type AccountType = 'checking' | 'savings' | 'investment' | 'cash' | 'other';

export type Account = {
  id: string;
  userId: string;
  name: string;
  type: AccountType;
  balance: number;
  bank?: string;
};

export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: string;
  userId: string;
  accountId: string;
  date: Date;
  description: string;
  amount: number;
  type: TransactionType;
  category: string;
  notes?: string;
  attachmentUrl?: string;
};

export type Category = {
  id: string;
  userId: string;
  name: string;
  type: TransactionType | 'all';
};

export type Goal = {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  description?: string;
};
