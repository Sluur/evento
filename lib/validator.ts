import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "El titulo debe tener al menos 3 caracteres"),
  description: z
    .string()
    .min(3, "La descripcion debe tener al menos 3 caracteres")
    .max(600, "La descripcion debe tener menos de 400 caracteres"),
  location: z
    .string()
    .min(3, "La ubicacion debe tener almenos 3 caracteres")
    .max(400, "La ubicacion debe tener menos de 400 caracteres"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
