import PlusIcon from '../../../../assets/icons/PlusIcon';
import TaskCard from './TaskCard';

export default function StatusColumn() {
  return (
    <>
      <div className="flex flex-col w-[288px] shrink-0 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full bg-[#64748B]`} />
            <span className="text-[#64748B] font-bold text-[12px] uppercase tracking-[0.6px]">
              To do
            </span>
            <span
              className={`text-[10px] text-slate-one font-bold leading-3.75 px-1.5 py-0.5 rounded-xs bg-surface-highest`}
            >
              2
            </span>
          </div>
          <button
            type="button"
            className="text-slate-one/40 hover:text-slate-one cursor-pointer text-xl"
            aria-label={`Add task to`}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-4 text-[#43465499] font-bold text-[12px] uppercase leading-4 tracking-[1.2px] hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          <PlusIcon /> Add New Task
        </button>
        <div className="flex flex-col gap-3">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </>
  );
}
