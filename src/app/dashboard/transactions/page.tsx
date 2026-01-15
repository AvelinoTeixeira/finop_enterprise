import { TransactionList } from "@/features/transactions/components/transaction-list";
import { getTransactions } from "@/features/transactions/services";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Gestão Financeira</h1>
        <p className="text-slate-500 text-sm">Os dados abaixo são salvos localmente no seu navegador.</p>
      </div>
      <TransactionList initialTransactions={transactions} />
    </div>
  );
}