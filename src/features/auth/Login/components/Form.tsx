import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../../../shared/components/Spinner';
import Button from '../../../../shared/components/Button';
import MailIcon from '../../../../assets/icons/MailIcon';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../schema/login-schema';
import { handleSignin } from '../api';
import { toast } from 'react-toastify';
import { useTogglePassword } from '../../../../shared/hooks/useTogglePassword';
import EyeIcon from '../../../../assets/icons/EyeIcon';
import ArrowRight from '../../../../assets/icons/ArrowRight';
import EyeoffIcon from '../../../../assets/icons/EyeoffIcon';
import type { FormInputs } from '../type';

export default function Form() {
  const { visible, typeInput, toggle } = useTogglePassword();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      remember_me: false,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        email: data.email,
        password: data.password,
        rememberMe: data.remember_me,
      };

      await handleSignin(payload);

      navigate('/project');
      toast.success('Welcome Back!');
      reset();
    } catch (error: unknown) {
      toast.error('Invalid email or password');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="md:p-12 bg-[#FFFFFF] md:shadow-[0px_24px_48px_0px_#041B3C0F] h-full w-120 max-w-120">
        <header className="heading text-center pt-8 pb-10">
          <h1 className="heading-h1 mb-2 ">Welcome Back</h1>
          <p className="p-style">
            Please enter your details to access your workspace
          </p>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 pb-4"
        >
          <label className={`label ${errors.email && 'text-error'}`} htmlFor="">
            <span className="hidden md:block">Email</span>
            <span className="md:hidden">Email Address</span>
            <div className="relative">
              <input
                className={`input ${errors.email && 'input-error'}`}
                type="email"
                placeholder="yourname@company.com"
                {...register('email')}
              />
              <div className="absolute right-3 top-[35%]">
                <MailIcon />
              </div>
            </div>
            {errors.email && (
              <span className="text-error">{errors.email.message}</span>
            )}
          </label>
          <div className="password">
            <label
              className={`label ${errors.password && 'text-error'}`}
              htmlFor=""
            >
              <div className="flex justify-between">
                <span>Password</span>
                <Link
                  className="md:hidden text-primary text-label-sm font-bold leading-[16.5px]"
                  to={'/forgot-password'}
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  className={`input ${errors.password && 'input-error'}`}
                  type={typeInput}
                  placeholder="Enter your password"
                  {...register('password')}
                />

                <div
                  onClick={toggle}
                  className="absolute right-3 top-[56%] -translate-y-1/2 cursor-pointer"
                >
                  {visible ? <EyeoffIcon /> : <EyeIcon />}
                </div>
              </div>
              {errors.password && (
                <span className="text-error mt-2 block">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div className="hidden md:block">
            <Button>{isLoading ? <Spinner /> : 'Log In'}</Button>
          </div>
          <div className="md:hidden">
            <Button>
              {isLoading ? (
                <Spinner />
              ) : (
                <div className="flex items-center gap-2">
                  Sign In <ArrowRight />
                </div>
              )}
            </Button>
          </div>
          <div className="flex justify-between">
            <label
              className="flex items-center gap-2 text-body-md leading-5 font-medium text-[#434654]"
              htmlFor="remember_me"
            >
              <input
                className=""
                type="checkbox"
                id="remember_me"
                {...register('remember_me')}
              />
              Remember me
            </label>
            <Link
              className="text-primary text-body-md leading-5 font-medium hidden md:block"
              to={'/forgot-password'}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="text-body-md text-slate-two leading-5 pt-[47.5px] pb-8 flex justify-center gap-3 md:gap-1">
          Don't have an account?{' '}
          <Link className="text-primary font-semibold" to={'/sign-up'}>
            Sign Up
          </Link>
        </p>
      </section>
    </>
  );
}
