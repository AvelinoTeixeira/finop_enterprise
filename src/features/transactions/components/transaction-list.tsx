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

  useEffect(() => {
    const saved = localStorage.getItem("finop_transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    } else {
      setTransactions(initialTransactions);
    }
  }, [initialTransactions]);

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
      {/* Formulário - Background e bordas variáveis */}
      <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
        <h3 className="font-bold mb-4 flex items-center gap-2 text-foreground">
          <PlusCircle size={18} className="text-blue-600" />
          Nova Transação
        </h3>
        {/* Inputs com cores contrastantes */}
        <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4">
          <Input 
            className="bg-background text-foreground border-border placeholder:text-muted"
            placeholder="Descrição" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
          />
          <Input 
            className="bg-background text-foreground border-border placeholder:text-muted"
            type="number" 
            placeholder="Valor" 
            value={val} 
            onChange={(e) => setVal(e.target.value)} 
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
            Adicionar
          </Button>
        </form>
      </div>

      {/* Tabela de Transações */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-border">
  <tr>
    <th className="p-4 text-sm font-black uppercase tracking-widest text-foreground">
      Descrição
    </th>
    <th className="p-4 text-sm font-black uppercase tracking-widest text-foreground text-right">
      Valor
    </th>
    <th className="p-4 text-sm font-black uppercase tracking-widest text-foreground text-center">
      Ação
    </th>
  </tr>
</thead>
          <tbody className="divide-y divide-border">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                <td className="p-4 text-sm font-medium text-foreground">{t.description}</td>
                <td className={cn(
                  "p-4 text-sm font-bold text-right",
                  t.amount > 0 ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"
                )}>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.amount)}
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => handleDelete(t.id)} className="text-muted hover:text-rose-600 p-2 transition-colors">
                    <Trash2 size={18} />
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