import { Suspense } from "react";
import { TransactionList } from "@/features/transactions/components/transaction-list";
import { TransactionForm } from "@/features/transactions/components/transaction-form";
import { ExpenseChart } from "@/features/analytics/components/expense-chart";
import { getTransactions } from "@/features/transactions/services";



export default async function DashboardPage() {
  const transactions = await getTransactions();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <ExpenseChart />
        <Suspense fallback={<p>Carregando transações...</p>}>
          <TransactionList initialTransactions={transactions} />
        </Suspense>
      </div>
      <TransactionForm />
    </div>
  );
}