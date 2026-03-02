import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(128, "Password is too long"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;