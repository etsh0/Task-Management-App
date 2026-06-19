import ArrowRight2 from '../../assets/icons/ArrowRight2';
import NewTaskForm from '../../features/tasks/components/NewTaskForm';

export default function AddNewTaskPage() {
  return (
    <section className="px-6 lg:px-12 pt-8 pb-12 md:py-10">
      <header className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 uppercase font-bold leading-4 tracking-[1.2px] text-label-sm mb-8">
            <span className=" text-[#43465499]">Projects</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className=" text-[#43465499]">Projects Alpha</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className="text-[#43465499]">Tasks</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className="text-primary">New Task</span>
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Create New Task
          </h2>
          <p className="text-[#434654]">
            Initialize a new work item within the Architectural Workspace
            ecosystem.
          </p>
        </div>
      </header>
      <div className="mt-8">
        <NewTaskForm />
      </div>
    </section>
  );
}
