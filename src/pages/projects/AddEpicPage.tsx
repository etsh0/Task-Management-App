import NewEpicForm from '../../features/project-epics/components/NewEpicForm';
import Header from '../../shared/components/Header';
import { useBreadcrumb } from '../../shared/hooks/useBreadcrumb';

export default function AddEpicPage() {
  const breadcrumb = useBreadcrumb();
  return (
    <section className="px-6 lg:px-22 pt-8 pb-15">
      <Header title="Create New Epic" breadcrumb={breadcrumb} btnText="" />
      <p className="text-neutral max-w-115.5 -mt-6 mb-10">
        Define a major project phase or high-level milestone to group related
        tasks and track architectural progress.
      </p>
      <div className="mt-10">
        <NewEpicForm />
      </div>
    </section>
  );
}
