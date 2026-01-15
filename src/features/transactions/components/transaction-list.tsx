"use client"
import { useOptimistic } from "react";
import { Card } from "@/components/ui/card";
import { cn, formatCurrency } from "@/lib/utils";
import { Transaction } from "../types";

export function TransactionList({ initialTransactions }: { initialTransactions: Transaction[] }) {
  const [optimisticTxs, addOptimistic] = useOptimistic(
    initialTransactions,
    (state, newTx: Transaction) => [...state, { ...newTx, pending: true }]
  );

  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold mb-4">Últimas Transações</h3>
      <div className="space-y-4">
        {optimisticTxs.map((tx, i) => (
          <div key={tx.id || i} className={cn("flex justify-between border-b pb-2", tx.pending && "opacity-50")}>
            <div>
              <p className="font-medium">{tx.description}</p>
              <p className="text-xs text-slate-500">{tx.category}</p>
            </div>
            <p className="font-bold">{formatCurrency(tx.amount)}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}