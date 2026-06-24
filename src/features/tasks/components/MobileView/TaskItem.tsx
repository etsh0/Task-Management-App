import { useDispatch } from 'react-redux';
import ThreeDots from '../../../../assets/icons/ThreeDots';
import UnassignedIcon from '../../../../assets/icons/UnassignedIcon';
import { STATUS_CONFIG } from '../../../../shared/constants/statusConfig';
import { formatDate } from '../../../../shared/utils/formatDate';
import { getInitials } from '../../../../shared/utils/getInitials';
import type { AppDispatch } from '../../../../store/store';
import type { EpicTask } from '../../type';
import { useParams } from 'react-router-dom';
import { openTaskPopup } from '../../../../store/slices/taskDetailsSlice';

export default function TaskItem({ task }: { task: EpicTask }) {
  const dispatch = useDispatch<AppDispatch>();
  const { projectId } = useParams();
  return (
    <>
      <div
        onClick={() =>
          dispatch(openTaskPopup({ selectedTaskId: task.id, projectId }))
        }
        className="task p-4 rounded-lg flex flex-col gap-3 sahdow-[0px_4px_24px_0px_#041B3C0A] bg-white"
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-label-sm font-bold text-neutral/50 leading-[16.5px] tracking-[-0.55px]">
              {task.task_id}
            </span>
            <p className="text-slate-one font-medium leading-[24.75px]">
              {task.title}
            </p>
          </div>
          <span
            className={`py-0.5 px-2 rounded-xs ${STATUS_CONFIG[task.status].badgeColor} text-label-sm font-bold uppercase`}
          >
            {task.status}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#DAE2FF] w-7 h-7 uppercase rounded-xl flex items-center justify-center text-slate-one text-label-sm font-bold">
              {task.assignee?.name ? (
                getInitials(task.assignee.name)
              ) : (
                <UnassignedIcon />
              )}
            </span>
            <div className="flex flex-col ">
              <span className="text-label-sm font-bold uppercase text-neutral/70 leading-[16.5px]">
                DUE DATE
              </span>
              <span className="text-[12px] font-medium text-slate-one">
                {task.due_date ? formatDate(task.due_date) : 'No due date'}
              </span>
            </div>
          </div>
          <ThreeDots />
        </div>
      </div>
    </>
  );
}
