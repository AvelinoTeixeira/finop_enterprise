"use client"
import { useActionState } from "react";
import { createTransactionAction } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function TransactionForm() {
  const [state, formAction, isPending] = useActionState(createTransactionAction, { errors: {} });

  return (
    <Card className="p-6">
      <form action={formAction} className="space-y-4">
        <h3 className="font-bold">Nova Transação</h3>
        <Input name="description" placeholder="Descrição" required />
        <Input name="amount" type="number" placeholder="Valor" required />
        <Input name="category" placeholder="Categoria" required />
        <Button className="w-full" disabled={isPending}>
          {isPending ? "Processando..." : "Adicionar"}
        </Button>
      </form>
    </Card>
  );
}