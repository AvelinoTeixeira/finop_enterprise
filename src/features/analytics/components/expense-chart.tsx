"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [{ n: "Seg", v: 400 }, { n: "Ter", v: 700 }, { n: "Qua", v: 500 }, { n: "Qui", v: 900 }];

export function ExpenseChart() {
  return (
    <Card>
      <CardHeader><CardTitle>Fluxo de Gastos</CardTitle></CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="n" hide />
            <Tooltip />
            <Bar dataKey="v" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}