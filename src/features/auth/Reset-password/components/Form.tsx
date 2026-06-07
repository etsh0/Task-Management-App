import { useState } from 'react';
import Button from '../../../../components/Button';
import Spinner from '../../../../components/Spinner';
import { useTogglePassword } from '../../../../hooks/useTogglePassword';
import EyeIcon from '../../../../assets/icons/EyeIcon';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ValidationItem from '../../../../components/ValidationItem';
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '../schema/reset-password';
import type { FormInputs } from '../type';
import { updatePassword } from '../api';
import { toast } from 'react-toastify';
import EyeoffIcon from '../../../../assets/icons/EyeoffIcon';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const { visible, typeInput, toggle } = useTogglePassword();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(resetPasswordSchema),
  });

  const access_token = searchParams.get('access_token');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!access_token) return;
    setIsLoading(true);

    try {
      await updatePassword(data.password, access_token);
      reset();
      toast.success(
        'Your password has been updated successfully. You can now log in',
      );
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // to watch value of password input
  const passwordInput = useWatch({
    control,
    name: 'password',
  });

  const password = passwordInput ?? '';

  const passwordChecks = {
    hasLength: password?.length >= 8 && password.length <= 64,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasDigit: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  };

  return (
    <>
      <div className="pt-8 pb-12 px-8 md:p-10 bg-[#FFFFFF] shadow-[0px_24px_48px_0px_#041B3C0F] h-full w-lg max-w-lg">
        <div className="heading text-center md:text-left pt-8 pb-10 flex flex-col items-center md:items-start">
          <h1 className="heading-h1 mb-2 ">Create a New Password</h1>
          <p className="p-style">
            Create a new, strong password to secure your workstation access.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="password flex flex-col gap-4">
            <label
              className={`label ${errors.password && 'text-error'}`}
              htmlFor=""
            >
              <span className="uppercse">New Password</span>
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
            </label>

            <label
              className={`label ${errors.confirm_password && 'text-error'}`}
              htmlFor=""
            >
              <span className="uppercase">Confirm Password</span>
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
          <div className="password-validation w-full bg-surface-highest rounded-lg p-5 ">
            <div className="pb-2 border-b border-border">
              <h2 className="text-label-sm text-[#434654] font-bold uppercase ">
                Security Requirements
              </h2>
            </div>
            <div className="grid-cols-2 gap-3 mt-4 hidden md:grid">
              <div className="flex flex-col gap-2">
                <ValidationItem
                  isValid={passwordChecks.hasLength}
                  text="8-64 characters"
                />
                <ValidationItem
                  isValid={passwordChecks.hasLowerCase}
                  text="Lowercase letter"
                />
                <ValidationItem
                  isValid={passwordChecks.hasSpecialChar}
                  text="Special character"
                />
              </div>
              <div className="flex flex-col gap-2">
                <ValidationItem
                  isValid={passwordChecks.hasUpperCase}
                  text="Uppercase letter"
                />
                <ValidationItem
                  isValid={passwordChecks.hasDigit}
                  text="One digit"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:hidden">
              <ValidationItem
                isValid={passwordChecks.hasLength}
                text="8-64 characters"
              />
              <ValidationItem
                isValid={
                  passwordChecks.hasLowerCase && passwordChecks.hasLowerCase
                }
                text="Uppercase & Lowercase"
              />
              <ValidationItem
                isValid={passwordChecks.hasDigit}
                text="At least one digit"
              />
              <ValidationItem
                isValid={passwordChecks.hasSpecialChar}
                text="Special character (e.g. !@#$)"
              />
            </div>
          </div>
          <div className="">
            <Button>{isLoading ? <Spinner /> : 'Update Password'}</Button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-6">
          <Link
            className="text-primary text-[13px] font-medium leading-[19.5px]"
            to={'/login'}
          >
            <span className="hidden md:block">Back to sign in</span>
            <span className="md:hidden">Back to Log in</span>
          </Link>
        </div>
      </div>
    </>
  );
}
