"use server";

import { revalidatePath } from "next/cache";

// Tipagem para o estado do formulário
export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function createTransactionAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const description = formData.get("description");
  const amount = formData.get("amount");

  console.log("Processando:", description, amount);

  // Simulação de delay de rede
  await new Promise((res) => setTimeout(res, 1000));

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/transactions");

  return { success: true, message: "Transação criada!" };
}

export async function deleteTransactionAction(id: string) {
  console.log("Deletando:", id);
  // Aqui futuramente entrará a chamada ao banco de dados
  revalidatePath("/dashboard/transactions");
}