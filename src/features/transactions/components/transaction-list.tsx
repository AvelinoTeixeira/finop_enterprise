"use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

export function TransactionList({ initialTransactions }: { initialTransactions: Transaction[] }) {
  // Estado local para permitir que a lista mude sem refresh de página
  const [transactions, setTransactions] = useState(initialTransactions);

  // Sincroniza se os dados iniciais mudarem (ex: após o build)
  useEffect(() => {
    setTransactions(initialTransactions);
  }, [initialTransactions]);

  const handleDelete = (id: string) => {
    // Filtra a lista localmente para remover o item imediatamente
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  if (transactions.length === 0) {
    return (
      <div className="p-8 text-center border-2 border-dashed rounded-xl text-slate-400">
        Nenhuma transação encontrada.
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 font-semibold text-xs uppercase text-slate-500">Descrição</th>
            <th className="p-4 font-semibold text-xs uppercase text-slate-500 text-right">Valor</th>
            <th className="p-4 font-semibold text-xs uppercase text-slate-500 text-center">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-slate-50 transition-colors">
              <td className="p-4 text-sm text-slate-700 font-medium">{t.description}</td>
              <td className={cn(
                "p-4 text-sm font-bold text-right", 
                t.amount > 0 ? "text-emerald-600" : "text-rose-600"
              )}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.amount)}
              </td>
              <td className="p-4 text-center">
                <button 
                  onClick={() => handleDelete(t.id)}
                  className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}