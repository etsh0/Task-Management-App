import type z from "zod";
import type { forgotPasswordSchema } from "./schema/forgot-password";

export type FormInputs = z.infer<typeof forgotPasswordSchema>;

export type ForgotPasswordPayload = {
  email: string;
};