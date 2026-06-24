import { useParams } from 'react-router-dom';
import CalenderIcon from '../../../assets/icons/CalenderIcon';
import CheckIcon from '../../../assets/icons/CheckIcon';
import ClockIcon from '../../../assets/icons/ClockIcon';
import CloseIcon from '../../../assets/icons/CloseIcon';
import EpicIcon2 from '../../../assets/icons/EpicIcon2';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';
import { useTaskDetails } from '../hooks/useTaskDetails';
import { STATUS_CONFIG } from '../../../shared/constants/statusConfig';
import { closeTaskPopup } from '../../../store/slices/taskDetailsSlice';
import { getInitials } from '../../../shared/utils/getInitials';
import UnassignedIcon from '../../../assets/icons/UnassignedIcon';
import { formatDate } from '../../../shared/utils/formatDate';
import TaskDetailsBottomSheetSkeleton from './TaskDetailsBottomSheetSkeleton';

export default function TaskDetailsBottomSheet() {
  const { projectId } = useParams();
  const { selectedTaskId } = useSelector(
    (state: RootState) => state.taskDetails,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { task, loading } = useTaskDetails(projectId ?? '', selectedTaskId);

  if (!selectedTaskId) return null;
  if (loading) return (
    <>
      <div
        onClick={() => dispatch(closeTaskPopup())}
        className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <TaskDetailsBottomSheetSkeleton />
        </div>
      </div>
    </>
  );
  if (!task) return null;

  return (
    <>
      <div
        onClick={() => dispatch(closeTaskPopup())}
        className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-0 left-0 right-0 z-100 bg-white rounded-t-2xl h-[85vh] overflow-y-auto pb-10 px-6"
        >
          <div className="flex items-center justify-between pt-8 pb-2">
            <div className="text-neutral text-[10px] font-bold leading-3.75 tracking-[0.5px] uppercase">
              {task?.task_id}
            </div>
            <div onClick={() => dispatch(closeTaskPopup())}>
              <CloseIcon />
            </div>
          </div>
          <p className="mt-2 leading-7.5 font-semibold text-[24px] text-slate-one w-85.5">
            {task?.title}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div
              className={`${STATUS_CONFIG[task.status].badgeColor} rounded-xl py-1 px-3 flex items-center gap-2 leading-[16.5px] font-bold text-label-sm`}
            >
              <CheckIcon />
              <span className="uppercase">
                {STATUS_CONFIG[task.status].label}
              </span>
            </div>
            {task?.epic.epic_id && (
              <div className="bg-surface-low rounded-xl py-1 px-3 flex items-center gap-2 text-[#374763] leading-[16.5px] font-bold text-label-sm">
                <EpicIcon2 />
                <span className="uppercase">{task.epic.epic_id}</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Assign
              </h5>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-xl pt-1 pb-1.25 bg-surface-highest uppercase text-primary text-[10px] font-bold">
                  {task.assignee?.name ? (
                    getInitials(task.assignee.name)
                  ) : (
                    <UnassignedIcon />
                  )}
                </div>
                <span className="text-body-md font-medium leading-5 text-slate-one">
                  {task.assignee?.name || 'Unassigned'}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Due Date
              </h5>
              <div className="flex items-center gap-2">
                <CalenderIcon />
                <span className="text-body-md font-medium text-slate-one leading-5">
                  {task.due_date ? formatDate(task.due_date) : 'No due date'}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Created By
              </h5>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-xl pt-1 pb-1.25 bg-surface-highest uppercase text-neutral text-[10px] font-bold">
                  {task.created_by?.name ? (
                    getInitials(task.created_by.name)
                  ) : (
                    <UnassignedIcon />
                  )}
                </div>
                <span className="text-body-md font-medium leading-5 text-slate-one">
                  {task.created_by.name}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Created At
              </h5>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <span className="text-body-md font-medium text-slate-one leading-5">
                  {task.created_at
                    ? formatDate(task.created_at)
                    : 'No due date'}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h5 className="text-label-sm font-bold leading-5 text-neutral uppercase">
              Description
            </h5>
            <div className="shadow-[0px_1px_2px_0px_#0000000D] bg-white rounded-lg text-label-sm text-neutral border border-border p-5 mt-2">
              {task.description ? task.description : 'No description'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
