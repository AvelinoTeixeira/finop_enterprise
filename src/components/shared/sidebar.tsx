"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Receipt, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Hook para redirecionar o usuário

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transações", href: "/dashboard/transactions", icon: Receipt },
  ];

  // Função que dispara o alerta e simula a saída
  const handleLogout = () => {
    const confirmLogout = window.confirm("Deseja realmente sair do sistema?");
    
    if (confirmLogout) {
      // Se ele clicar em "Sim/OK", vai para a página inicial
      router.push("/");
    }
    // Se clicar em cancelar, nada acontece e ele continua no Dashboard
  };

  return (
    <aside 
      style={{ boxShadow: "var(--shadow-style)" }}
      className="w-64 bg-card h-screen flex flex-col shrink-0 transition-all z-10"
    >
      {/* Logo / Branding */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="h-4 w-4 bg-white rounded-sm rotate-45" />
          </div>
          <h1
            style={{ color: "var(--logo-color)" }}
            className="text-2xl font-bold transition-colors"
          >
            FinOp<span className="text-blue-400">.</span>
          </h1>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm",
                isActive
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100",
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-blue-600" : "text-slate-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé - Botão Sair com a nova lógica */}
      <div className="p-4 mt-auto space-y-1">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors w-full cursor-pointer border-none"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}