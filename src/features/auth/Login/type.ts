import type z from 'zod';
import type { LoginSchema } from './schema/login-schema';

export type FormInputs = z.infer<typeof LoginSchema>;

export type SigninPayload = {
  email: string;
  password: string;
  remember_me?: boolean;
};
