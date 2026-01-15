import { Transaction } from "./types";

export async function getTransactions(): Promise<Transaction[]> {
  // Garantimos que o retorno seja rápido para o teste inicial
  return [
    { 
      id: "1", 
      description: "Venda Freelance", 
      amount: 2500, 
      category: "Receita", 
      date: new Date().toISOString() 
    },
    { 
      id: "2", 
      description: "Assinatura Software", 
      amount: 150, 
      category: "Software", 
      date: new Date().toISOString() 
    },
  ];
}