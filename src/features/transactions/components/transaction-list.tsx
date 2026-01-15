"use client";

import { useState, useEffect } from "react";
import { Trash2, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TransactionList({ initialTransactions }: { initialTransactions: any[] }) {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState("");

  // Carrega do LocalStorage ao abrir a página
  useEffect(() => {
    const saved = localStorage.getItem("finop_transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    } else {
      setTransactions(initialTransactions);
    }
  }, [initialTransactions]);

  // Salva no LocalStorage sempre que a lista mudar
  const saveAndSet = (newList: any[]) => {
    setTransactions(newList);
    localStorage.setItem("finop_transactions", JSON.stringify(newList));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !val) return;

    const newTr = {
      id: Math.random().toString(36).substr(2, 9),
      description: desc,
      amount: parseFloat(val),
      date: new Date().toISOString(),
    };

    saveAndSet([newTr, ...transactions]);
    setDesc("");
    setVal("");
  };

  const handleDelete = (id: string) => {
    saveAndSet(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Formulário integrado para garantir funcionamento imediato */}
      <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <PlusCircle size={18} className="text-blue-600" />
          Nova Transação
        </h3>
        <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Descrição" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
          />
          <Input 
            type="number" 
            placeholder="Valor (ex: 100 ou -50)" 
            value={val} 
            onChange={(e) => setVal(e.target.value)} 
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Adicionar
          </Button>
        </form>
      </div>

      {/* Lista de Transações */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 text-xs font-semibold uppercase text-slate-500">Descrição</th>
              <th className="p-4 text-xs font-semibold uppercase text-slate-500 text-right">Valor</th>
              <th className="p-4 text-xs font-semibold uppercase text-slate-500 text-center">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm font-medium text-slate-700">{t.description}</td>
                <td className={cn(
                  "p-4 text-sm font-bold text-right",
                  t.amount > 0 ? "text-emerald-600" : "text-rose-600"
                )}>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.amount)}
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => handleDelete(t.id)} className="text-slate-400 hover:text-rose-500 p-2">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}