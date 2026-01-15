import { Suspense } from "react";
import { TransactionList } from "@/features/transactions/components/transaction-list";
import { TransactionForm } from "@/features/transactions/components/transaction-form";
import { getTransactions } from "@/features/transactions/services";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Gerenciar Transações</h1>
        <p className="text-slate-500">Adicione, remova e visualize seu histórico financeiro.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<p>Carregando histórico...</p>}>
            <TransactionList initialTransactions={transactions} />
          </Suspense>
        </div>
        <div>
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}