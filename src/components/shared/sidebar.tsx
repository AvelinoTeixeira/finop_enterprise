"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  // Definição estrita dos itens do menu para evitar erros de tipagem
  const menuItems = [
    { 
      name: "Dashboard", 
      href: "/dashboard", 
      icon: LayoutDashboard 
    },
    { 
      name: "Transações", 
      href: "/dashboard/transactions", 
      icon: Receipt 
    },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white h-screen flex flex-col shrink-0">
      {/* Logo / Branding */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="h-4 w-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            FinOp<span className="text-blue-600">.</span>
          </span>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Lógica de Ativo: Compara a URL atual (pathname) com o link do item (href)
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm",
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-blue-600" : "text-slate-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-slate-100 space-y-1">
        <button className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors w-full">
          <Settings size={18} />
          Configurações
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors w-full">
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}