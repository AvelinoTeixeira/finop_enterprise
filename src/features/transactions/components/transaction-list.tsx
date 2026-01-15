"use client";

import { Trash2 } from "lucide-react";
import { deleteTransactionAction } from "../actions";
import { cn } from "@/lib/utils"; // Importação que faltava

interface TransactionListProps {
  initialTransactions: any[];
}

export function TransactionList({ initialTransactions }: TransactionListProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 font-semibold text-xs uppercase tracking-wider text-slate-500">Descrição</th>
            <th className="p-4 font-semibold text-xs uppercase tracking-wider text-slate-500 text-right">Valor</th>
            <th className="p-4 font-semibold text-xs uppercase tracking-wider text-slate-500 text-center">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {initialTransactions.map((t) => (
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
                  onClick={() => deleteTransactionAction(t.id)}
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