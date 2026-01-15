export type TransactionCategory = "Receita" | "Moradia" | "Software" | "Lazer" | "Outros";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: TransactionCategory | string;
  date: string;
  pending?: boolean; // Para o useOptimistic do React 19
}

export interface ActionResponse {
  success?: boolean;
  errors?: {
    [key: string]: string[];
  };
}