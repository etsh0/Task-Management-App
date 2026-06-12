import ArrowRight2 from '../../assets/icons/ArrowRight2';
import MemberIcon from '../../assets/icons/MemberIcon';
import Button from './Button';
import type { HeaderProps } from '../../features/projects/type';
import SearchIcon from '../../assets/icons/SearchIcon';

export default function Header({
  title,
  breadcrumb,
  btnText,
  search,
  onClick,
}: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-4 ">
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
        <div className="flex items-center gap-8">
          <div className={`relative ${search && 'hidden'}`}>
            <input
              type="text"
              placeholder="Search epics..."
              className="bg-surface-highest focus:outline-0 border border-border max-w-75.75 rounded-xs py-2.5 pr-6 pl-8 text-body-md"
            />
            <span className="absolute left-3 top-[50%] -translate-y-1/2">
              <SearchIcon />
            </span>
          </div>
          <div onClick={onClick} className="hidden md:block">
            <Button>
              {' '}
              <MemberIcon />
              <span className="">{btnText}</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
