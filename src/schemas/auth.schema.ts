import { z } from "zod";

export const loginSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  message: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  message: z.string(),
  username: z.string(),
});
