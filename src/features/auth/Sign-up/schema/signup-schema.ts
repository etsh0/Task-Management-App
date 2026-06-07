import z from 'zod';

export const signupSchma = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .regex(
        /^[\p{L}]+(?:\s[\p{L}]+)*$/u,
        'Name can only contain letters and single spaces between words',
      ),
    email: z.string().min(1, 'Email is required').email('Not Valid email'),
    job_title: z.string().optional(),
    password: z
      .string()
      .min(8, 'Password is required')
      .max(64, 'Password must be at most 64 characters')
      .regex(/^\S+$/, 'Password must not contain spaces')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[!@#$%^&*]/,
        'Password must contain at least one special character',
      ),
    confirm_password: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });
