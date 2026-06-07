import type z from 'zod';
import type { resetPasswordSchema } from './components/schema/reset-password';

export type FormInputs = z.infer<typeof resetPasswordSchema>;
