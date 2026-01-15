"use server"
import { revalidatePath } from "next/cache";
import { transactionSchema } from "./schemas";

export async function createTransactionAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const validated = transactionSchema.safeParse(data);

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  // Simula gravação no DB
  await new Promise((res) => setTimeout(res, 1000));
  
  revalidatePath("/dashboard");
  return { success: true, errors: {} };
}