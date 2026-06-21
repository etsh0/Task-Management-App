import { useNavigate, useParams } from 'react-router-dom';
import ListIcon from '../../../assets/icons/ListIcon';
import Button from '../../../shared/components/Button';
import Spinner from '../../../shared/components/Spinner';
import { useEpicTasks } from '../hooks/useEpicTasks';
import type { EpicTask } from '../type';
import Task from './Task';
import PlusIcon from '../../../assets/icons/PlusIcon';

export default function EpicTasksList({ epicId }: { epicId: string }) {
  const { tasks, loading, error } = useEpicTasks(epicId);
  const navigate = useNavigate();
  const { projectId } = useParams();

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400 py-8">Failed to load tasks</p>
    );
  }

  return (
    <>
      {tasks.length === 0 ? (
        <div className="mt-6 bg-surface-low p-12 rounded-lg border-dashed border-2 border-border flex flex-col gap-4 items-center justify-center">
          <div className="p-4 bg-surface-highest rounded-xl">
            <ListIcon />
          </div>
          <p className="text-slate-one font-medium leading-6 text-center">
            No tasks have been added to this epic yet
          </p>
          <div
            onClick={() =>
              navigate(`/project/${projectId}/tasks/new`, {
                state: { epicId: epicId },
              })
            }
            className="w-fit"
          >
            <Button>+ Add Task</Button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-border flex flex-col mt-4">
          {tasks.map((task: EpicTask) => (
            <Task key={task.id} task={task} />
          ))}
          <div
            onClick={() =>
              navigate(`/project/${projectId}/tasks/new`, {
                state: { epicId: epicId },
              })
            }
            className="md:hidden py-4 flex items-center justify-center gap-2 rounded-lg border-dashed border-border uppercase text-label-sm text-neutral/60 font-bold leading-4 tracking-[1.2px]"
          >
            <PlusIcon />
            Add New Task
          </div>
        </div>
      )}
    </>
  );
}
