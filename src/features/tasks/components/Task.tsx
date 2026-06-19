import CheckIcon from '../../../assets/icons/CheckIcon';
import UnassignedIcon from '../../../assets/icons/UnassignedIcon';
import { formatDate } from '../../../shared/utils/formatDate';
import { getInitials } from '../../../shared/utils/getInitials';
import type { EpicTask } from '../type';

export default function Task({ task }: { task: EpicTask }) {
  return (
    <>
      <div className="task p-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-4">
          <CheckIcon />
          <div className="flex flex-col gap-1">
            <p className="text-slate-one font-medium leading-6">{task.title}</p>
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 bg-surface-highest text-[8px] font-bold uppercase leading-3 text-[#51617E] flex items-center justify-center rounded-[50%]">
                {task.assignee?.name ? (
                  getInitials(task.assignee.name)
                ) : (
                  <UnassignedIcon />
                )}
              </div>
              <span className="text-[#041B3C99] text-label-sm leading-4">
                {task.assignee?.name ?? 'Unassigned'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[#041B3C66] font-bold uppercase leading-3.75 text-[10px]">
            Due Date
          </span>
          <span className="text-[#041B3CB2] font-medium text-label-sm leading-4">
            {task.due_date ? formatDate(task.due_date) : 'No due date'}
          </span>
        </div>
      </div>
    </>
  );
}
