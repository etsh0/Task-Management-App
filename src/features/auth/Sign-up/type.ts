import type z from 'zod';
import type { signupSchma } from './schema/signup-schema';

export type FormInputs = z.infer<typeof signupSchma>;

export type SignupPayload = {
  email: string;
  password: string;
  data: {
    name: string;
    job_title?: string;
  };
};
