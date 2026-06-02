import { useState } from 'react';
import Button from '../../../../components/Button';
import Spinner from '../../../../components/Spinner';
import { useTogglePassword } from '../../../../hooks/useTogglePassword';
import EyeIcon from '../../../../assets/icons/EyeIcon';
import { Link } from 'react-router-dom';
import ValidationItem from '../../../../components/ValidationItem';

export default function Form() {
  const [isLoading] = useState(false);
  const { visible, typeInput, toggle } = useTogglePassword();

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
          // onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="password flex flex-col gap-4">
            <label className="label" htmlFor="">
              <span className="uppercse">New Password</span>
              <div className="relative">
                <input
                  className="input"
                  type={typeInput}
                  placeholder="Password"
                  // {...register('password')}
                />
                <div
                  onClick={toggle}
                  className="absolute right-3 inset-y-0 top-[35%] cursor-pointer"
                >
                  {visible ? <EyeIcon /> : <EyeIcon />}
                </div>
              </div>
            </label>

            <label className="label" htmlFor="">
              <span className="uppercase">Confirm Password</span>
              <input
                className="input"
                type="password"
                placeholder="Repeat your password"
                // {...register('confirm_password')}
              />
              {/* {errors.confirm_password && (
                    <span className="text-red-500">
                    {errors.confirm_password.message}
                    </span>
                )} */}
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
                <ValidationItem isValid={false} text="8-64 characters" />
                <ValidationItem isValid={false} text="Lowercase letter" />
                <ValidationItem isValid={false} text="Special character" />
              </div>
              <div className="flex flex-col gap-2">
                <ValidationItem isValid={false} text="Uppercase letter" />
                <ValidationItem isValid={false} text="One digit" />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:hidden">
              <ValidationItem isValid={false} text="8-64 characters" />
              <ValidationItem isValid={false} text="Uppercase & Lowercase" />
              <ValidationItem isValid={false} text="At least one digit" />
              <ValidationItem
                isValid={false}
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
