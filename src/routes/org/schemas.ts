import { z } from "zod";

export const orgDatabaseFields = z.object({
  id: z.string().uuid(),
  responsible: z.string().min(2),
  email: z.string().email(),
  cep: z.string().length(8),
  address: z.string().min(2),
  whatsapp: z.string().refine(
    (whatsapp) => {
      return /^[0-9]{2}[0-9]{9}$/.test(whatsapp);
    },
    {
      message: "Format invalid, the pattern is XX XXXX-XXXX",
    }
  ),
  password: z.string().min(8),
  created_at: z.date(),
});

export const orgUseCaseRequest = orgDatabaseFields.omit({
  id: true,
  created_at: true,
});

export const authBodySchema = z.object({
  email: z.string().email(),
  password: orgDatabaseFields.shape.password,
});

export const profileOrgRequestTokenSchema = z.object({
  id: orgDatabaseFields.shape.id,
});
