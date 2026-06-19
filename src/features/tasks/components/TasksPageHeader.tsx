import ArrowRight2 from '../../../assets/icons/ArrowRight2';
import SearchInput from '../../../shared/components/SearchInput';
import DashboardIcon from '../../../assets/icons/DashboardIcon';
import ArrowDown from '../../../assets/icons/ArrowDown';
import FilterIcon from '../../../assets/icons/FilterIcon';

export default function TasksPageHeader() {
  return (
    <>
      <header className="flex items-end justify-between mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 uppercase font-bold leading-4 tracking-[1.2px] text-label-sm mb-8">
            <span className=" text-[#43465499]">Projects</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className=" text-[#43465499]">Projects Alpha</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className="text-[#43465499]">Tasks</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Active Workboard
          </h2>
          <p className="text-[#434654]">
            Curating Project Alpha's production pipeline and milestones.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput placeholder="Search tasks..." />
          <div className="py-2 px-4 rounded-sm border border-border bg-white flex items-center justify-center gap-2">
            <DashboardIcon />
            <span className="text-slate-one font-medium text-body-md leading-5">
              Board View
            </span>
            <ArrowDown />
          </div>
          <div className="p-2 rounded-sm bg-surface-highest">
            <FilterIcon />
          </div>
        </div>
      </header>
    </>
  );
}
