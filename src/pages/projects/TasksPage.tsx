import { useSearchParams } from 'react-router-dom';
import TasksPageHeader from '../../features/tasks/components/TasksPageHeader';
import BoardView from '../../features/tasks/components/kanban/BoardView';
import ListView from '../../features/tasks/components/list/ListView';
import TasksOnMobile from '../../features/tasks/components/MobileView/TasksOnMobile';
import TaskDetailsModal from '../../features/tasks/components/TaskDetailsModal';
import TaskDetailsBottomSheet from '../../features/tasks/components/TaskDetailsBottomSheet';

export default function TasksPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'board';
  return (
    <>
      <div className="desktop hidden lg:block py-8 px-6 lg:px-8">
        <TasksPageHeader />
        {view === 'board' ? (
          <section className="board-view mt-6">
            <BoardView />
          </section>
        ) : (
          <section className="list-view mt-6 pb-20">
            <ListView />
          </section>
        )}
      </div>
      <div className="mobile lg:hidden py-8 px-4">
        <TasksOnMobile />
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <TaskDetailsModal />
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <TaskDetailsBottomSheet />
      </div>
    </>
  );
}
