import { TransactionList } from "@/features/transactions/components/transaction-list";
import { getTransactions } from "@/features/transactions/services";
import { ExpenseChart } from "@/features/analytics/components/expense-chart";

export default async function DashboardPage() {
  const transactions = await getTransactions();

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm">Visão geral do seu fluxo financeiro.</p>
      </div>

      {/* Seção do Gráfico - Agora ocupa a largura total */}
      <div className="w-full">
        <ExpenseChart />
      </div>

      {/* Seção da Lista e Novo Formulário Horizontal */}
      <div className="w-full">
        <TransactionList initialTransactions={transactions} />
      </div>

    </div>
  );
}