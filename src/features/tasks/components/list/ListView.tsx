import ThreeDots2 from '../../../../assets/icons/ThreeDots2';
import UnassignedIcon from '../../../../assets/icons/UnassignedIcon';
import { STATUS_CONFIG } from '../../../../shared/constants/statusConfig';
import { formatDate } from '../../../../shared/utils/formatDate';
import { getInitials } from '../../../../shared/utils/getInitials';
import { useAllTasks } from '../../hooks/useAllTasks';
import type { EpicTask } from '../../type';

export default function ListView() {
  const { tasks } = useAllTasks();
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Task Id
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Title
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Status
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Due Date
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Assignee
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tasks.map((task: EpicTask) => (
            <tr key={task.id}>
              <td className="py-4 px-6 text-[12px] text-primary leading-4 uppercase">
                {task.task_id}
              </td>
              <td className="py-4 px-6 text-body-md text-slate-one font-medium">
                {task.title}
              </td>
              <td className="py-4 px-6 ">
                <div
                  className={`bg-[#CDDDFF] text-center text-[#374763] ${STATUS_CONFIG[task.status].badgeColor} uppercase py-1 px-2 rounded-xs text-label-sm font-bold`}
                >
                  {task.status}
                </div>
              </td>
              <td className="py-4 px-6 text-neutral text-body-md">
                {task.due_date ? formatDate(task.due_date) : 'No due date'}
              </td>
              <td className="py-4 px-6 flex items-center gap-3">
                <div className="bg-[#DAE2FF] w-7 h-7 rounded-xl flex items-center justify-center text-slate-one text-label-sm font-bold">
                  {task.assignee?.name ? (
                    getInitials(task.assignee.name)
                  ) : (
                    <UnassignedIcon />
                  )}
                </div>
                <span className="text-body-md text-slate-one">
                  {task.assignee?.name || 'Unassigned'}
                </span>
              </td>
              <td className="py-4 px-6">
                <ThreeDots2 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
