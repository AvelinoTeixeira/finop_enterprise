import { LayoutDashboard, Receipt } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-10 text-blue-400">FinOp.</h2>
      <nav className="space-y-4">
        <div className="flex items-center gap-3 text-blue-400"><LayoutDashboard size={20}/> Dashboard</div>
        <div className="flex items-center gap-3 text-slate-400"><Receipt size={20}/> Transações</div>
      </nav>
    </aside>
  );
}