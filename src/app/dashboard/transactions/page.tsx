import { TransactionList } from "@/features/transactions/components/transaction-list";
import { getTransactions } from "@/features/transactions/services";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="p-6 space-y-6"> 
      <TransactionList initialTransactions={transactions} />
    </div>
  );
}