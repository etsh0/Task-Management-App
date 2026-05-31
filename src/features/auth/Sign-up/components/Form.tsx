import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import UncheckedIcon from '../../../../assets/icons/UncheckedIcon';
import EyeIcon from '../../../../assets/icons/EyeIcon';

export default function Form() {
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
        <form className="w-full flex flex-col gap-6 pb-4">
          <label className="label" htmlFor="">
            Name
            <Input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value=""
            />
            <span className="text-slate-three normal-case font-normal tracking-normal">
              3-50 characters, letters only.
            </span>
          </label>
          <label className="label" htmlFor="">
            Email
            <Input
              type="email"
              placeholder="yourname@company.com"
              name="email"
              value=""
            />
          </label>
          <label className="label" htmlFor="">
            Job Title (Optional)
            <Input
              type="text"
              placeholder="e.g. Project Manager"
              name="job_title"
              value=""
            />
          </label>
          <div className="password flex flex-col md:flex-row gap-4">
            <label className="label" htmlFor="">
              Password
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value=""
                />
                <div className="absolute right-3 inset-y-0 top-[30%]">
                  <EyeIcon />
                </div>
              </div>
            </label>

            <label className="label" htmlFor="">
              Confirm Password
              <Input
                type="password"
                placeholder="Repeat your password"
                name="confirm_password"
                value=""
              />
            </label>
          </div>
          <div className="password-validation w-full bg-surface-highest rounded-lg p-4 flex flex-col gap-2">
            <div className="text-label-sm text-[#434654] leading-[16.5px] flex items-center gap-2">
              <CheckIcon />
              At least 8 characters
            </div>
            <div className="text-label-sm text-[#434654] leading-[16.5px] flex items-center gap-2">
              <UncheckedIcon />
              One uppercase, lowercase, and digit
            </div>
            <div className="text-label-sm text-[#434654] leading-[16.5px] flex items-center gap-2">
              <UncheckedIcon />
              One special character
            </div>
          </div>
          <Button text={'Create Account'} />
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
