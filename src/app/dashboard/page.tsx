import { TransactionList } from "@/features/transactions/components/transaction-list";
import { getTransactions } from "@/features/transactions/services";
import { ExpenseChart } from "@/features/analytics/components/expense-chart";

export default async function DashboardPage() {
  const transactions = await getTransactions();

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div>
        {/* Título com a cor exata pedida e peso bold equilibrado */}
        <h1
          style={{ color: "var(--logo-color)" }}
          className="text-2xl font-bold transition-colors"
        >
          Dashboard
        </h1>
        {/* Subtítulo ajustado para melhor legibilidade (a11y) */}
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
          Visão geral do seu fluxo financeiro.
        </p>
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
