import NewTaskForm from '../../features/tasks/components/NewTaskForm';
import Header from '../../shared/components/Header';
import { useBreadcrumb } from '../../shared/hooks/useBreadcrumb';

export default function AddNewTaskPage() {
  const breadcrumb = useBreadcrumb();
  return (
    <section className="px-6 lg:px-12 pt-8 pb-12 md:py-10">
      <Header title="Create New Task" breadcrumb={breadcrumb} btnText="" />
      <p className="text-neutral -mt-6 mb-8">
        Initialize a new work item within the Architectural Workspace ecosystem.
      </p>
      <div className="mt-8">
        <NewTaskForm />
      </div>
    </section>
  );
}
