import Button from '../../../shared/components/Button';
import AddProjectCard from './AddProjectCard';
import Pagination from './Pagination';
import ProjectCard from './ProjectCard';
// import ProjectsErrorState from './ProjectsErrorState';
// import ProjectsSkeleton from './ProjectsSkeleton';
// import ProjectsEmptyState from './ProjectsEmptyState';

export default function Projects() {
  return (
    <>
      <section className="px-8 pt-8 pb-20 md:pb-[121.5px]">
        {/* <div>
            <ProjectsEmptyState />
        </div> */}
        {/* <div>
            <ProjectsErrorState />
        </div> */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">
              Projects
            </h2>
            <p className="text-[16px] leading-6 text-[#434654]">
              Manage and curate your projects
            </p>
          </div>
          <div className="hidden md:block">
            <Button>+ Create New Project</Button>
          </div>
        </header>
        {/* <ProjectsSkeleton/> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-15 md:pb-[126.5px]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <AddProjectCard />
        </div>
        <div className="items-center justify-between py-12 px-8 hidden md:flex">
          <div>
            <p className="text-[12px] text-[#434654] font-medium leading-4.5">
              Showing 5 of 24 active projects
            </p>
          </div>
          <Pagination />
        </div>
        <div className="w-14 h-14 ml-auto md:hidden">
          <Button>+</Button>
        </div>
      </section>
    </>
  );
}
