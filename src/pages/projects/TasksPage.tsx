import { useSearchParams } from 'react-router-dom';
import TasksPageHeader from '../../features/tasks/components/TasksPageHeader';
import BoardView from '../../features/tasks/components/kanban/BoardView';

export default function TasksPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'board';
  return (
    <>
      <div className="">
        {view === 'board' ? (
          <section className="py-8 px-6 lg:px-8">
            <TasksPageHeader />
            <div className="board-view mt-6">
              <BoardView />
            </div>
          </section>
        ) : (
          <section>List</section>
        )}
      </div>
    </>
  );
}
