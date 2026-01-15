import { z } from "zod";

export const transactionSchema = z.object({
  description: z.string().min(3, "Descrição muito curta"),
  amount: z.coerce.number().gt(0, "O valor deve ser maior que zero"),
  category: z.string().min(1, "Selecione uma categoria"),
});