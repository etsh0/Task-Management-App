import { Link } from 'react-router-dom';
import ArrowRight2 from '../../assets/icons/ArrowRight2';
import MemberIcon from '../../assets/icons/MemberIcon';
import Button from './Button';
import type { BreadcrumbItem, HeaderProps } from '../../features/projects/type';

export default function Header({
  title,
  breadcrumb,
  btnText,
  onClick,
  children,
}: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 uppercase font-bold leading-4 tracking-[1.2px] text-label-sm">
            {breadcrumb.map((item: BreadcrumbItem, index: number) => {
              const isLast = index === breadcrumb.length - 1;
              return (
                <span key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span>
                      <ArrowRight2 className={'w-[3.7px] h-1.5'} />
                    </span>
                  )}
                  {isLast ? (
                    <span className="text-primary">{item.label}</span>
                  ) : item.href ? (
                    <Link
                      to={item.href}
                      className="text-[#43465499] hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#43465499]">{item.label}</span>
                  )}
                </span>
              );
            })}
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-8">
          {children}
          <div onClick={onClick} className="hidden md:block w-fit">
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
