"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes"; // Hook para detectar o tema atual

const data = [
  { n: "Seg", v: 400 }, 
  { n: "Ter", v: 700 }, 
  { n: "Qua", v: 500 }, 
  { n: "Qui", v: 900 },
  { n: "Sex", v: 650 }
];

export function ExpenseChart() {
  const { theme } = useTheme();

  // Definimos as cores baseadas no tema para manter a elegância
  const barColor = theme === "dark" ? "#60a5fa" : "#3b82f6"; // Azul mais claro no dark
  const gridColor = theme === "dark" ? "#1e293b" : "#f1f5f9"; // Linhas de grade sutis

  return (
    <Card className="dark:bg-card dark:border-border transition-colors">
      <CardHeader>
        <CardTitle className="text-lg font-bold dark:text-slate-700">Fluxo de Gastos</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
            <XAxis 
              dataKey="n" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: theme === "dark" ? "#94a3b8" : "#64748b", fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: theme === "dark" ? "#1e293b" : "#f8fafc" }}
              contentStyle={{ 
                backgroundColor: theme === "dark" ? "#0f172a" : "#fff",
                border: theme === "dark" ? "1px solid #1e293b" : "1px solid #e2e8f0",
                borderRadius: "8px"
              }}
              itemStyle={{ color: theme === "dark" ? "#f1f5f9" : "#0f172a" }}
            />
            <Bar 
              dataKey="v" 
              fill={barColor} 
              radius={[4, 4, 0, 0]} 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}