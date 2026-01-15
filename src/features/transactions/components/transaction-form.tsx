"use client";

import { useActionState } from "react";
import { createTransactionAction, FormState } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TransactionForm() {
  // No React 19, o hook espera a action e o estado inicial
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    createTransactionAction, 
    null
  );

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
      <h3 className="font-bold mb-4 text-slate-900 text-lg">Nova Transação</h3>
      
      <form action={formAction} className="space-y-4">
        <Input name="description" placeholder="Descrição" required disabled={isPending} />
        <Input name="amount" type="number" step="0.01" placeholder="Valor (Ex: 150.00)" required disabled={isPending} />
        <Input name="category" placeholder="Categoria" required disabled={isPending} />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Processando..." : "Adicionar Transação"}
        </Button>

        {state?.success && (
          <p className="text-sm text-green-600 font-medium text-center mt-2">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}