import type z from 'zod';
import type { LoginSchema } from './schema/login-schema';

export type FormInputs = z.infer<typeof LoginSchema>;

export type SigninPayload = {
  email: string;
  password: string;
};

export type CookiesTypes = {
  accessToken: string;
  refreshToken: string;
  rememberMe: boolean;
};
