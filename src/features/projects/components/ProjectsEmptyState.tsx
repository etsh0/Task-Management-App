import { useNavigate } from 'react-router-dom';
import img from '../../../assets/images/ProjectsEmptyState.svg';
import Button from '../../../shared/components/Button';

export default function ProjectsEmptyState() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex items-center justify-center text-center py-10 px-6">
        <div className="flex flex-col gap-8 items-center">
          <img className="w-45 md:w-[288px]" src={img} alt="" />
          <div className="">
            <h1 className="text-headline-lg text-slate-one font-semibold leading-10 tracking-[-0.9px] mb-4">
              No Projects
            </h1>
            <p className="text-[15px] md:text-title-md text-neutral leading-[29.25px] max-w-md">
              You don’t have any projects yet. Start by defining your first
              architectural workspace to begin tracking tasks and epics.
            </p>
            <div
              className="mt-4 w-fit mx-auto"
              onClick={() => navigate('/project/add')}
            >
              <Button>+ Create New Project</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
