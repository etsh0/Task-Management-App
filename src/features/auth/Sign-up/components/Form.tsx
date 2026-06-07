import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../shared/components/Button';
import EyeIcon from '../../../../assets/icons/EyeIcon';
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchma } from '../schema/signup-schema';
import type { FormInputs } from '../type';
import { handleSignUp } from '../api';
import { useTogglePassword } from '../../../../shared/hooks/useTogglePassword';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from '../../../../shared/components/Spinner';
import ValidationItem from '../../../../shared/components/ValidationItem';
import EyeoffIcon from '../../../../assets/icons/EyeoffIcon';


export default function Form() {
  const { visible, typeInput, toggle } = useTogglePassword();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control,
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(signupSchma),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        email: data.email,
        password: data.password,
        data: {
          name: data.name,
          ...(data.job_title && { job_title: data.job_title }),
        },
      };
   
      await handleSignUp(payload);

      toast.success('Account created successfully');
      navigate('/');
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    } finally {
      setIsLoading(false);
    }
  };

  // to watch value of password input
  const passwordInput = useWatch({
    control,
    name: 'password',
  });

  const passwordChecks = {
    hasLength: passwordInput?.length >= 8,
    hasUpperCase: passwordInput?.match(/[A-Z]/),
    hasLowerCase: passwordInput?.match(/[a-z]/),
    hasDigit: passwordInput?.match(/[0-9]/),
    hasSpecialChar: passwordInput?.match(/[!@#$%^&*]/),
  };

  return (
    <>
      <div className="md:p-12 bg-[#FFFFFF] md:shadow-[0px_24px_48px_0px_#041B3C0F] h-full w-xl max-w-xl">
        <div className="heading md:text-center pt-8 pb-10">
          <h1 className="heading-h1 mb-2 ">Create your workspace</h1>
          <p className="p-style hidden md:block">
            Join the editorial approach to task management.
          </p>
          <p className="p-style md:hidden">
            Join the curated environment for institutional trust and task
            precision.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 pb-4"
        >
          <label className={`label ${errors.name && 'text-error'}`} htmlFor="">
            Name
            <input
              className={`input ${errors.name && 'input-error'}`}
              type="text"
              placeholder="Enter your full name"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-error">{errors.name.message}</span>
            )}
          </label>
          <label className={`label ${errors.email && 'text-error'}`} htmlFor="">
            Email
            <input
              className={`input ${errors.email && 'input-error'}`}
              type="email"
              placeholder="yourname@company.com"
              {...register('email')}
            />
            {errors.email && (
              <span className="text-error">{errors.email.message}</span>
            )}
          </label>
          <label className="label" htmlFor="">
            Job Title (Optional)
            <input
              className="input"
              type="text"
              placeholder="e.g. Project Manager"
              {...register('job_title')}
            />
            {errors.job_title && (
              <span className="text-error">{errors.job_title.message}</span>
            )}
          </label>
          <div className="password flex flex-col md:flex-row gap-4">
            <label
              className={`label ${errors.password && 'text-error'}`}
              htmlFor=""
            >
              Password
              <div className="relative">
                <input
                  className={`input ${errors.password && 'input-error'}`}
                  type={typeInput}
                  placeholder="Password"
                  {...register('password')}
                />
                <div
                  onClick={toggle}
                  className="absolute right-3 inset-y-0 top-[35%] cursor-pointer"
                >
                  {visible ? <EyeoffIcon /> : <EyeIcon />}
                </div>
              </div>
              {errors.password && (
                <span className="text-error">{errors.password.message}</span>
              )}
            </label>

            <label
              className={`label ${errors.confirm_password && 'text-error'}`}
              htmlFor=""
            >
              Confirm Password
              <input
                className={`input ${errors.confirm_password && 'input-error'}`}
                type="password"
                placeholder="Repeat your password"
                {...register('confirm_password')}
              />
              {errors.confirm_password && (
                <span className="text-error">
                  {errors.confirm_password.message}
                </span>
              )}
            </label>
          </div>
          <div className="password-validation w-full bg-surface-highest rounded-lg p-4 flex flex-col gap-2">
            <ValidationItem
              isValid={passwordChecks.hasLength}
              text="At least 8 characters"
            />
            <ValidationItem
              isValid={
                !!(
                  passwordChecks.hasUpperCase &&
                  passwordChecks.hasLowerCase &&
                  passwordChecks.hasDigit
                )
              }
              text="One uppercase, lowercase, and digit"
            />
            <ValidationItem
              isValid={!!passwordChecks.hasSpecialChar}
              text="One special character"
            />
          </div>
          <Button>{isLoading ? <Spinner /> : 'Create Account'}</Button>
        </form>
        <p className="text-center text-body-md text-slate-two leading-5 pt-[47.5px] pb-8">
          Already have an account?{' '}
          <Link className="text-primary font-semibold" to={'/login'}>
            Log in
          </Link>
        </p>
      </div>
    </>
  );
}
