import { useDispatch, useSelector } from 'react-redux';
import AddProjectCard from '../../features/projects/components/addProject/AddProjectCard';
import Pagination from '../../features/projects/components/Pagination';
import ProjectCard from '../../features/projects/components/ProjectCard';
import Button from '../../shared/components/Button';
import type { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import {
  clearSelectedProject,
  getAllProjects,
} from '../../store/slices/ProjectsSlice';
import ProjectsSkeleton from '../../features/projects/components/ProjectsSkeleton';
import ProjectsEmptyState from '../../features/projects/components/ProjectsEmptyState';
import { useNavigate } from 'react-router-dom';
import ErrorState from '../../shared/components/ErrorState';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const disPatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects,
  );

  useEffect(() => {
    disPatch(getAllProjects());
  }, [disPatch]);

  // useEffect(() => {
  //   if (error === 'UNAUTHORIZED') {
  //     navigate('/login');
  //   }
  // }, [error, navigate]);

  if (loading) return <ProjectsSkeleton />;

  if (error)
    return (
      <ErrorState text="We are having trouble retrieving your projects right now. Please try again in a moment." />
    );

  const handleAddProject = () => {
    disPatch(clearSelectedProject());
    navigate('/project/add');
  };

  return (
    <>
      {projects.length === 0 ? (
        <ProjectsEmptyState />
      ) : (
        <section className="px-8 pt-8 pb-20 md:pb-[121.5px]">
          <header className="flex items-center justify-between mb-10">
            <div className="flex flex-col gap-1">
              <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">
                Projects
              </h2>
              <p className="text-[16px] leading-6 text-[#434654]">
                Manage and curate your projects
              </p>
            </div>
            {/* add project >> serelectedProject = null */}
            <div onClick={() => handleAddProject()} className="hidden md:block">
              <Button>+ Create New Project</Button>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-15 md:pb-[126.5px]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <AddProjectCard />
          </div>
          <div className="pagination items-center justify-between py-12 px-8 hidden md:flex">
            <div>
              <p className="text-[12px] text-[#434654] font-medium leading-4.5">
                Showing 5 of 24 active projects
              </p>
            </div>
            <Pagination />
          </div>
          <div
            onClick={() => handleAddProject()}
            className="w-14 h-14 ml-auto fixed bottom-15 right-6 md:hidden z-50"
          >
            <Button>+</Button>
          </div>
        </section>
      )}
    </>
  );
}
