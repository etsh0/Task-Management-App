import BurgerIcon from '../../../assets/icons/BurgerIcon';
import { useUser } from '../../../hooks/useUser';
import { getInitials } from '../../../utils/getInitials';

interface HeaderProps {
  onBurgerClick: () => void;
}

export default function Header({ onBurgerClick }: HeaderProps) {
  const { user } = useUser();

  return (
    <>
      <div className="flex justify-between items-center h-full">
        <div
          className="flex items-center gap-4 sm:opacity-0"
          onClick={onBurgerClick}
        >
          <BurgerIcon />
          <span className="text-[20px] font-bold uppercase leading-7 tracking-[-0.5px] text-slate-one">
            Taskly
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className=" flex-col pl-4 border-l border-border hidden sm:flex">
            <span className="text-slate-one text-body-md leading-5 font-bold capitalize">
              {user?.name}
            </span>
            <span className="text-primary text-[10px] uppercase font-bold">
              {user?.job_title}
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg text-white bg-primary-container flex items-center justify-center">
            <span>{getInitials(user?.name)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
