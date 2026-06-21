import { useSearchParams } from 'react-router-dom';
import TasksPageHeader from '../../features/tasks/components/TasksPageHeader';
import BoardView from '../../features/tasks/components/kanban/BoardView';
import ListView from '../../features/tasks/components/list/ListView';

export default function TasksPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'board';
  return (
    <>
      <div className="py-8 px-6 lg:px-8">
        <TasksPageHeader />
        {view === 'board' ? (
          <section className="board-view mt-6">
            <BoardView />
          </section>
        ) : (
          <section className="list-view mt-6">
            <ListView />
          </section>
        )}
      </div>
    </>
  );
}
