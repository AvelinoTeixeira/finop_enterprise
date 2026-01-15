import { Transaction } from "./types";

export async function getTransactions(): Promise<Transaction[]> {
  return [
    { 
      id: "1", 
      description: "Venda Freelance", 
      amount: 2500, 
      category: "Receita", 
      // Use uma string de data fixa em vez de new Date()
      date: "2026-01-15T10:00:00.000Z" 
    },
    { 
      id: "2", 
      description: "Assinatura Software", 
      amount: 150, 
      category: "Software", 
      date: "2026-01-14T15:30:00.000Z" 
    },
  ];
}