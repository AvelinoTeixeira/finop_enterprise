import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
      <div className="text-sm font-medium text-slate-400">FinOp / Overview</div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-slate-400" />
        </button>
        <div className="flex items-center gap-3 border-l pl-4">
          <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <span className="text-sm font-semibold text-slate-700">Admin</span>
        </div>
      </div>
    </header>
  );
}