import ArrowRight2 from '../../../assets/icons/ArrowRight2';
import MemberIcon from '../../../assets/icons/MemberIcon';
import Button from '../../../shared/components/Button';
import type { HeaderProps } from '../type';

export default function Header({ title, breadcrumb }: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 uppercase font-bold leading-4 tracking-[1.2px] text-label-sm">
            <span className=" text-[#43465499]">Projects</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className="text-primary">{breadcrumb}</span>
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            {title}
          </h2>
        </div>
        <div className="hidden md:block">
          <Button>
            {' '}
            <MemberIcon /> Invite Member
          </Button>
        </div>
      </header>
    </>
  );
}
