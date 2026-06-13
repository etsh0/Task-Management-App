import { useNavigate, useParams } from 'react-router-dom';
import EpicCard from '../../features/project-epics/components/EpicCard';
import EpicsSkeleton from '../../features/project-epics/components/EpicsSkeleton';
import ProjectEpicsEmptyState from '../../features/project-epics/components/ProjectEpicsEmptyState';
import Pagination from '../../features/projects/components/Pagination';
import Button from '../../shared/components/Button';
import Header from '../../shared/components/Header';
import { useEpics } from '../../features/project-epics/hooks/useEpics';

export default function Epics() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { epics, loading } = useEpics(projectId);

  return (
    <>
      {loading ? (
        <EpicsSkeleton />
      ) : epics.length === 0 ? (
        <ProjectEpicsEmptyState />
      ) : (
        <section className="py-8 px-6 lg:px-8">
          <Header
            title="Project Epics"
            breadcrumb="Epics"
            btnText="New Epic"
            search={false}
            onClick={() => navigate(`/project/${projectId}/epics/new`)}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
            {epics.map((epic) => (
              <EpicCard key={epic.id} epic={epic} />
            ))}
          </div>
          <div className="pagination items-center justify-between py-12 px-8 hidden md:flex">
            <div>
              <p className="text-[12px] text-[#434654] font-medium leading-4.5">
                Showing 5 of 24 active projects
              </p>
            </div>
            <Pagination />
          </div>
          <div className="w-10 h-10 ml-auto md:hidden mt-8 fixed bottom-20 right-10 z-50">
            <Button>
              <span className="text-body-md">+</span>
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
