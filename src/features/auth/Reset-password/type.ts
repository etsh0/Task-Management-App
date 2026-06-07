import type z from 'zod';
import type { resetPasswordSchema } from './schema/reset-password';

export type FormInputs = z.infer<typeof resetPasswordSchema>;
