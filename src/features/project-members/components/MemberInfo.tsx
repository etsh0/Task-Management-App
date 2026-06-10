import { getInitials } from '../../../shared/utils/getInitials';

interface props {
  name: string;
  email: string;
}

export default function MemberInfo({ name, email }: props) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="bg-surface-highest w-12 h-12 rounded-xl flex items-center justify-center">
          {getInitials(name)}
        </div>
        <div className="flex flex-col">
          <span className="text-body-md text-primary font-semibold leading-5">
            {name}
          </span>
          <span className="text-label-sm text-[#434654] leading-4">
            {email}
          </span>
        </div>
      </div>
    </>
  );
}
