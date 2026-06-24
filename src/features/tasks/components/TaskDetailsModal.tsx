import { useDispatch, useSelector } from 'react-redux';
import CopyIcon from '../../../assets/icons/CopyIcon';
import EpicIcon from '../../../assets/icons/EpicIcon';
// import Select from 'react-select';
import type { AppDispatch, RootState } from '../../../store/store';
import { closeTaskPopup } from '../../../store/slices/taskDetailsSlice';
import { useTaskDetails } from '../hooks/useTaskDetails';
import { useParams } from 'react-router-dom';
import { STATUS_CONFIG } from '../../../shared/constants/statusConfig';
import { getInitials } from '../../../shared/utils/getInitials';
import UnassignedIcon from '../../../assets/icons/UnassignedIcon';
import { formatDate } from '../../../shared/utils/formatDate';
import { useEffect } from 'react';

export default function TaskDetailsModal() {
  const { projectId } = useParams();
  const { selectedTaskId } = useSelector(
    (state: RootState) => state.taskDetails,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { task } = useTaskDetails(projectId ?? '', selectedTaskId);

  useEffect(() => {
    const handleESCkey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeTaskPopup());
    };
    document.addEventListener('keydown', handleESCkey);
    return () => document.removeEventListener('keydown', handleESCkey);
  }, [dispatch]);

  if (!selectedTaskId) return null;
  if (!task) return <div>Task not found</div>;

  return (
    <>
      <div
        onClick={() => dispatch(closeTaskPopup())}
        className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex bg-white sahdow-[0px_25px_50px_-12px_#00000040] md:w-3xl lg:w-4xl h-[90%] rounded-lg"
        >
          <div className="flex flex-col flex-1">
            <div className="py-6 px-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-surface-highest py-0.5 px-2 rounded-xs text-primary text-[12px] font-bold leading-4 tracking-[1.2px]">
                  {task.task_id}
                </div>
                {task.epic.epic_id && (
                  <div className="flex items-center gap-1.5 text-neutral font-medium leading-5">
                    <EpicIcon />
                    <span>
                      {task.epic.epic_id}({task.epic.title})
                    </span>
                  </div>
                )}
              </div>
              <p className="text-[30px] text-slate-one font-bold leading-9 mt-3">
                {task.title}
              </p>
            </div>
            <div className="flex-1 pt-8 px-8">
              <h4 className="text-neutral text-[10px] font-bold leading-3.75 tracking-[0.5px] uppercase">
                Description
              </h4>
              <p className="mt-3 leading-[22.75px] text-body-md text-slate-one max-w-lg">
                {task.description}
              </p>
            </div>
            <div className="flex items-center justify-between bg-surface-low py-4 px-8 rounded-lg">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
              >
                <CopyIcon />
                <span className="text-body-md text-neutral font-medium leading-5">
                  Copy Link
                </span>
              </button>
              <div className="bg-surface-highest py-2 px-4 rounded-sm">
                <button
                  onClick={() => dispatch(closeTaskPopup())}
                  type="button"
                  className="text-slate-one text-body-md font-semibold leading-5 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="p-8 bg-surface-low flex flex-col border-l border-border w-[320px] rounded-lg">
            {/* Status */}
            <div className="">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Status
              </h5>
              <div
                className={`${STATUS_CONFIG[task.status].badgeColor} py-2.5 px-4 rounded-sm text-[12px] font-bold uppercase`}
              >
                {STATUS_CONFIG[task.status].label}
              </div>
              {/* <Select
                value={task.status}
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: '4px',
                    backgroundColor: '#82f9be',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#041B3C',
                    lineHeight: '20px',
                    cursor: 'pointer',
                  }),
                }}
              /> */}
            </div>
            {/* Assign */}
            <div className="mt-10">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Assign
              </h5>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-surface-highest uppercase text-slate-one text-label-sm font-bold">
                  {task.assignee?.name ? (
                    getInitials(task.assignee.name)
                  ) : (
                    <UnassignedIcon />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-one font-semibold text-body-md leading-5 capitalize">
                    {task.assignee?.name || 'Unassigned'}
                  </span>
                  {/* <span className="text-neutral text-[10px] leading-3.75">
                    Frontend developer
                  </span> */}
                </div>
              </div>
            </div>
            {/* Reporter */}
            <div className="mt-10">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Reporter
              </h5>
              <div className="flex items-center gap-3 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-surface-highest uppercase text-slate-one text-label-sm font-bold">
                  {task.created_by?.name ? (
                    getInitials(task.created_by.name)
                  ) : (
                    <UnassignedIcon />
                  )}
                </div>
                <span className="text-slate-one font-semibold text-body-md leading-5 capitalize">
                  {task.created_by.name}
                </span>
              </div>
            </div>
            {/* date */}
            <div className="pt-4 mt-7 border-t border-border flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-neutral text-[12px] leading-4">
                  Due Date
                </span>
                <span className="text-slate-one text-body-md font-medium leading-5">
                  {task.due_date ? formatDate(task.due_date) : 'No due date'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral text-[12px] leading-4">
                  Created At
                </span>
                <span className="text-slate-one text-body-md font-medium leading-5">
                  {task.created_at ? formatDate(task.created_at) : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
