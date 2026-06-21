import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../shared/components/Button';
import SearchInput from '../../../../shared/components/SearchInput';
import { useAllTasks } from '../../hooks/useAllTasks';
import type { EpicTask } from '../../type';
import TaskItem from './TaskItem';

export default function TasksOnMobile() {
  const { tasks } = useAllTasks();
  const { projectId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <section className="">
        <header className="flex flex-col gap-6">
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Active Workboard
          </h2>
          <SearchInput placeholder="Search tasks..." />
          <div onClick={() => navigate(`/project/${projectId}/tasks/new`)}>
            <Button>+ Create Task</Button>
          </div>
        </header>
        <div className="flex flex-col gap-3 mt-6 pb-15">
          {tasks.map((task: EpicTask) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </section>
    </>
  );
}
