import img from '../../../assets/images/EmptyState.svg';
import Button from '../../../shared/components/Button';

export default function ProjectsEmptyState() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="flex flex-col gap-10.75 items-center">
          <img className="w-[288px]" src={img} alt="" />

          <div className="">
            <h1 className="text-headline-lg text-slate-one font-semibold leading-10 tracking-[-0.9px] mb-4">
              No Projects
            </h1>
            <p className="text-title-md text-[#434654] leading-[29.25px] w-108.5">
              You don’t have any projects yet. Start by defining your first
              architectural workspace to begin tracking tasks and epics.
            </p>
          </div>
          <div>
            <Button>+ Create New Project</Button>
          </div>
        </div>
      </div>
    </>
  );
}
