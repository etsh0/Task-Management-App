import Spinner from '../../../../components/Spinner';
import Button from '../../../../components/Button';
import { useState } from 'react';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import { Link } from 'react-router-dom';
import FillCheckIcon from '../../../../assets/icons/FillCheckIcon';
import ClockIcon from '../../../../assets/icons/ClockIcon';
import AuthenticationIcon from '../../../../assets/icons/AuthenticationIcon';

export default function Form() {
  const [isLoading] = useState(false);
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
            // onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <label className="label" htmlFor="">
              <span className="">Email Address</span>
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                // {...register('email')}
              />
              {/* {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                  )} */}
            </label>
            <div className="">
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
        <div className="pt-10 border-t border-border flex flex-col gap-6">
          <div className="gap-3 bg-success/20 p-4 rounded-lg hidden md:flex">
            <FillCheckIcon />
            <p className="text-[#005235] text-body-md leading-[17.5px]">
              If an account exists with this email, we’ve sent a password reset
              link.
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
            <div className="flex justify-between items-center">
              <p className="text-[#00523599] uppercase text-label-sm font-bold leading-[16.5px] tracking-[0.55px]">
                Didn't receive the email?
              </p>
              <p className="text-primary text-label-sm font-bold uppercase leading-[16.5px] tracking-[1.1px]">
                Resend in 05:00
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-3 justify-center items-center">
            <p className="text-[#434654] uppercase text-label-sm font-bold leading-[16.5px] tracking-[0.55px]">
              Didn't receive the email?
            </p>
            <div className="bg-surface-low flex items-center justify-center gap-2 w-full py-3 ">
              <ClockIcon />
              <div className="text-[#737685] text-[16px] font-semibold leading-6">
                Resend in 05:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
