import ArrowRight2 from '../../assets/icons/ArrowRight2';
import NewEpicForm from '../../features/project-epics/components/NewEpicForm';

export default function AddEpicPage() {
  return (
    <section className="px-22 pt-8 pb-15">
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
            <span className="text-[#43465499]">Epics</span>
            <span>
              <ArrowRight2 className={'w-[3.7px] h-1.5'} />
            </span>
            <span className="text-primary">New Epic</span>
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Create New Epic
          </h2>
          <p className="text-[#434654] max-w-115.5">
            Define a major project phase or high-level milestone to group
            related tasks and track architectural progress.
          </p>
        </div>
      </header>
      <div className="mt-10">
        <NewEpicForm />
      </div>
    </section>
  );
}
