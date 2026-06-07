import Spinner from '../../../../components/Spinner';
import Button from '../../../../components/Button';
import { useEffect, useState } from 'react';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import { Link } from 'react-router-dom';
import FillCheckIcon from '../../../../assets/icons/FillCheckIcon';
import ClockIcon from '../../../../assets/icons/ClockIcon';
import AuthenticationIcon from '../../../../assets/icons/AuthenticationIcon';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '../schema/forgot-password';
import type { FormInputs } from '../type';
import { recoverPassword } from '../api';
import { formatTime } from '../../../../utils/formatTime';

export default function Form() {
  const [isLoading, setIsloading] = useState(false);
  const [isShowResendMsg, setIsShowResendMsg] = useState(false);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [resendCount, setResendCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsloading(true);
    try {
      await recoverPassword({ email: data.email });
      setEmail(data.email);
      setTimeLeft(300);
      setIsShowResendMsg(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const handleResend = async () => {
    try {
      await recoverPassword({ email });
      setResendCount((prev) => prev + 1);
      setTimeLeft(300);
      console.log(resendCount, email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <div className="md:p-10 bg-[#FFFFFF] md:shadow-[0px_24px_48px_0px_#041B3C0F] h-full w-md max-w-md">
        <div className="shadow-[0px_24px_48px_0px_#041B3C0F] md:shadow-none p-6 rounded-lg">
          <div className="heading text-center md:text-left pt-8 pb-10 flex flex-col items-center md:items-start">
            <div className="rounded-xl p-3.5 bg-surface-highest flex items-center justify-center md:hidden mb-6">
              <AuthenticationIcon />
            </div>
            <h1 className="heading-h1 mb-2 ">Forgot password?</h1>
            <p className="p-style">
              No worries, we'll send you reset instructions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <label
              className={`label ${errors.email && 'text-error'}`}
              htmlFor=""
            >
              <span className="">Email Address</span>
              <input
                className={`input ${errors.email && 'input-error'}`}
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )}
            </label>
            <div className={`${isShowResendMsg && 'hidden'}`}>
              <Button>{isLoading ? <Spinner /> : 'Send Reset Link'}</Button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-1 mb-8 mt-6">
            <ArrowLeft />
            <Link to={'/login'}>
              <p className="text-primary text-body-md font-medium leading-5.25 ">
                Back to log in
              </p>
            </Link>
          </div>
        </div>
        {isShowResendMsg && (
          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <div className="gap-3 bg-success/20 p-4 rounded-lg hidden md:flex">
              <FillCheckIcon />
              <p className="text-[#005235] text-body-md leading-[17.5px]">
                If an account exists with this email, we’ve sent a password
                reset link.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-success/20 p-4 rounded-lg md:hidden">
              <div className="flex gap-3 border-b border-border pb-3">
                <FillCheckIcon />
                <p className="text-[#005235] text-body-md leading-[17.5px]">
                  If an account exists with this email, we’ve sent a password
                  reset link.
                </p>
              </div>
              <div className={`flex justify-between items-center`}>
                <p className="text-[#00523599] uppercase text-label-sm font-bold leading-[16.5px] tracking-[0.55px]">
                  Didn't receive the email?
                </p>
                <p className="text-primary text-label-sm font-bold uppercase leading-[16.5px] tracking-[1.1px]">
                  {timeLeft > 0 ? (
                    `Resend in ${formatTime(timeLeft)}`
                  ) : (
                    <button
                      onClick={handleSubmit(handleResend)}
                      disabled={timeLeft > 0 || resendCount >= 3}
                      className="disabled:cursor-not-allowed"
                    >
                      Resend Email
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3 justify-center items-center">
              <p className="text-[#434654] uppercase text-label-sm font-bold leading-[16.5px] tracking-[0.55px]">
                Didn't receive the email?
              </p>
              <button
                onClick={handleSubmit(handleResend)}
                disabled={timeLeft > 0 || resendCount >= 3}
                className="bg-surface-low flex items-center justify-center gap-2 w-full py-3 cursor-pointer disabled:cursor-not-allowed"
              >
                <ClockIcon />
                <div className="text-[#737685] text-[16px] font-semibold leading-6">
                  {timeLeft > 0
                    ? `Resend in ${formatTime(timeLeft)}`
                    : 'Resend Email'}
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
