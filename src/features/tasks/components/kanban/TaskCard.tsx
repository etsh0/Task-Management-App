import CalenderIcon from '../../../../assets/icons/CalenderIcon';
import UnassignedIcon from '../../../../assets/icons/UnassignedIcon';
import { formatDate } from '../../../../shared/utils/formatDate';
import { getInitials } from '../../../../shared/utils/getInitials';
import type { EpicTask } from '../../type';

export default function TaskCard({ task }: { task: EpicTask }) {
  const isBlocked = task.status === 'BLOCKED';
  return (
    <>
      <div
        className={`relative rounded-lg border p-4 flex flex-col gap-4 shadow-[0px_2px_8px_0px_#00000005] ${isBlocked ? 'bg-[#FFDAD633] border-[#BA1A1A1A]' : 'bg-white border-border'}`}
      >
        <p className="text-slate-one font-medium text-body-md leading-[19.25px]">
          {task.title}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-label-sm leading-4">
            {isBlocked ? (
              <span className="text-error text-[10px] font-bold leading-3.75 uppercase flex items-center gap-1">
                ⚠ Delayed
              </span>
            ) : (
              <span className="text-[#94A3B8] text-[10px] font-bold leading-3.75 uppercase flex items-center gap-1">
                <CalenderIcon />
                {task.due_date ? formatDate(task.due_date) : 'No due date'}
              </span>
            )}
          </div>
          <div className="h-6 w-6 bg-surface-highest text-slate-one text-[10px] font-bold uppercase flex items-center justify-center rounded-full">
            {task.assignee?.name ? (
              getInitials(task.assignee.name)
            ) : (
              <UnassignedIcon />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
