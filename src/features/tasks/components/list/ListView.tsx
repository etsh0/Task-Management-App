import ArrowLeft2 from '../../../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../../../assets/icons/ArrowRight2';
import ThreeDots2 from '../../../../assets/icons/ThreeDots2';
import UnassignedIcon from '../../../../assets/icons/UnassignedIcon';
import { STATUS_CONFIG } from '../../../../shared/constants/statusConfig';
import { formatDate } from '../../../../shared/utils/formatDate';
import { getInitials } from '../../../../shared/utils/getInitials';
import { useAllTasks } from '../../hooks/useAllTasks';
import type { EpicTask } from '../../type';
import ListViewSkeleton from './ListViewSkeleton';

export default function ListView() {
  const { tasks, loading } = useAllTasks();
  if (loading) return <ListViewSkeleton />;
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F1F3FF] shadow-[0px_1px_2px_0px_#0000000D]">
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
            <tr
              className="border-b border-[#F1F3FF] shadow-[0px_1px_2px_0px_#0000000D]"
              key={task.id}
            >
              <td className="py-4 px-6 text-[12px] text-primary leading-4 uppercase">
                {task.task_id}
              </td>
              <td className="py-4 px-6 text-body-md text-slate-one font-medium">
                {task.title}
              </td>
              <td className="py-4 px-6 ">
                <div
                  className={`bg-[#CDDDFF] text-center text-[#374763] w-fit ${STATUS_CONFIG[task.status].badgeColor} uppercase py-1 px-2 rounded-xs text-label-sm font-bold`}
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
        <tfoot className="bg-white ">
          <tr>
            <td className="py-4 px-6" colSpan={6}>
              <div className="pagination flex items-center justify-between w-full">
                <span className="text-neutral text-[12px] font-medium leading-4">
                  Showing 5 of 24 tasks
                </span>
                <div className="flex items-center gap-2 cursor-pointer">
                  <ArrowLeft2 />
                  <span className="text-neutral text-[12px] font-medium leading-4">
                    Page 1 of 5
                  </span>
                  <ArrowRight2 />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
