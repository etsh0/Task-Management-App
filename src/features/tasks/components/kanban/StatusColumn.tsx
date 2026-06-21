import { useNavigate, useParams } from 'react-router-dom';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import { STATUS_CONFIG } from '../../../../shared/constants/statusConfig';
import type { TaskStatus } from '../../type';
import TaskCard from './TaskCard';
import { useColumnTasks } from '../../hooks/useColumnTasks';

export default function StatusColumn({ status }: { status: TaskStatus }) {
  const { projectId } = useParams();
  const config = STATUS_CONFIG[status];
  const navigate = useNavigate();
  const { tasks, loading, error } = useColumnTasks(projectId ?? '', status);

  const handleAddTask = () => {
    navigate(`/project/${projectId}/tasks/new`, {
      state: { status },
    });
  };

  return (
    <>
      <div className="flex flex-col w-[288px] shrink-0 gap-4">
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
        <button
          type="button"
          onClick={handleAddTask}
          className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-4 text-neutral/60 font-bold text-[12px] uppercase leading-4 tracking-[1.2px] hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          <PlusIcon /> Add New Task
        </button>
        <div className="flex flex-col gap-3">
          {loading && (
            <p className="text-center text-slate-one/40 text-body-sm py-4">
              Loading...
            </p>
          )}
          {error && (
            <p className="text-center text-red-400 text-body-sm py-4">
              Failed to load tasks
            </p>
          )}
          {!loading && !error && tasks.length === 0 && (
            <p className="text-center text-slate-one/40 text-body-sm py-4 uppercase">
              No tasks
            </p>
          )}
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
