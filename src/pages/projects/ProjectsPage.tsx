import { useDispatch, useSelector } from 'react-redux';
import AddProjectCard from '../../features/projects/components/addProject/AddProjectCard';
import Pagination from '../../shared/components/Pagination';
import ProjectCard from '../../features/projects/components/ProjectCard';
import Button from '../../shared/components/Button';
import type { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import {
  clearSelectedProject,
  getAllProjects,
} from '../../store/slices/ProjectsSlice';
import ProjectsSkeleton from '../../features/projects/components/ProjectsSkeleton';
import ProjectsEmptyState from '../../features/projects/components/ProjectsEmptyState';
import { useNavigate } from 'react-router-dom';
import ErrorState from '../../shared/components/ErrorState';
import { PAGINATION_LIMIT } from '../../shared/constants/pagination';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const disPatch = useDispatch<AppDispatch>();
  const { projects, loading, error, totalCount } = useSelector(
    (state: RootState) => state.projects,
  );

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / PAGINATION_LIMIT);

  const offset = (currentPage - 1) * PAGINATION_LIMIT;

  useEffect(() => {
    disPatch(getAllProjects({ LIMIT: PAGINATION_LIMIT, OFFSET: offset }));
  }, [disPatch, offset]);

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
              <p className="text-[16px] leading-6 text-neutral">
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
          {totalPages > 1 && (
            <div className="pagination items-center justify-between py-12 px-8 hidden md:flex">
              <div>
                <p className="text-[12px] text-neutral font-medium leading-4.5">
                  Showing {projects.length} of {totalCount} active projects
                </p>
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
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
