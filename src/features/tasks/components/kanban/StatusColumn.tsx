import { useDroppable } from '@dnd-kit/core';
import { useNavigate, useParams } from 'react-router-dom';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import { STATUS_CONFIG } from '../../../../shared/constants/statusConfig';
import type { EpicTask, TaskStatus } from '../../type';
import TaskCard from './TaskCard';

interface StatusColumnProps {
  status: TaskStatus;
  tasks: EpicTask[];
  activeTaskId: string | null;
}

export default function StatusColumn({
  status,
  tasks,
  activeTaskId,
}: StatusColumnProps) {
  const { projectId } = useParams();
  const config = STATUS_CONFIG[status];
  const navigate = useNavigate();

  const { setNodeRef, isOver } = useDroppable({ id: status });

  const handleAddTask = () => {
    navigate(`/project/${projectId}/tasks/new`, {
      state: { status },
    });
  };

  return (
    <>
      <div className="flex flex-col w-[288px] shrink-0 gap-4">
        {/* Column Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${config.dotColor}`} />
            <span className="text-[#64748B] font-bold text-[12px] uppercase tracking-[0.6px]">
              {config.label}
            </span>
            <span
              className={`text-[10px] font-bold leading-3.75 px-1.5 py-0.5 rounded-xs ${config.badgeColor}`}
            >
              {tasks.length}
            </span>
          </div>
          <button
            type="button"
            onClick={handleAddTask}
            className="text-slate-one/40 hover:text-slate-one cursor-pointer text-xl"
            aria-label={`Add task to ${config.label}`}
          >
            +
          </button>
        </div>

        {/* Add Task Button */}
        <button
          type="button"
          onClick={handleAddTask}
          className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-4 text-neutral/60 font-bold text-[12px] uppercase leading-4 tracking-[1.2px] hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          <PlusIcon /> Add New Task
        </button>

        {/* Drop Zone */}
        <div
          ref={setNodeRef}
          className={`flex flex-col gap-3 min-h-30 rounded-xl transition-all duration-200 ${
            isOver
              ? 'bg-primary/5 ring-2 ring-primary/30 ring-dashed p-2 -m-2'
              : ''
          }`}
        >
          {tasks.length === 0 && !isOver && (
            <p className="text-center text-slate-one/40 text-body-sm py-4 uppercase">
              No tasks
            </p>
          )}
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              isBeingDragged={task.id === activeTaskId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
