import { useNavigate, useParams } from 'react-router-dom';
import EpicCard from '../../features/project-epics/components/EpicCard';
import EpicsSkeleton from '../../features/project-epics/components/EpicsSkeleton';
import ProjectEpicsEmptyState from '../../features/project-epics/components/ProjectEpicsEmptyState';
import Button from '../../shared/components/Button';
import Header from '../../shared/components/Header';
import { useEpics } from '../../features/project-epics/hooks/useEpics';
import SearchInput from '../../shared/components/SearchInput';
import ErrorState from '../../shared/components/ErrorState';
import Pagination from '../../shared/components/Pagination';
import { useState } from 'react';
import EpicModal from '../../features/project-epics/components/EpicModal';
import { useBreadcrumb } from '../../shared/hooks/useBreadcrumb';

export default function Epics() {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedEpic, setSelectedEpic] = useState<string | null>(null);
  const breadcrumb = useBreadcrumb();

  const {
    epics,
    setEpics,
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount,
  } = useEpics(projectId);

  if (error)
    return (
      <ErrorState text="We are having trouble retrieving your project epics right now. Please try again in a moment." />
    );

  return (
    <>
      {loading ? (
        <EpicsSkeleton />
      ) : epics.length === 0 ? (
        <ProjectEpicsEmptyState />
      ) : (
        <section className="py-8 px-6 lg:px-8">
          <div className="hidden md:block">
            <Header
              title="Project Epics"
              breadcrumb={breadcrumb}
              btnText="New Epic"
              onClick={() => navigate(`/project/${projectId}/epics/new`)}
            >
              <SearchInput />
            </Header>
          </div>
          <SearchInput className="md:hidden relative" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 pb-20">
            {epics.map((epic) => (
              <EpicCard
                key={epic.id}
                epic={epic}
                onClick={() => setSelectedEpic(epic.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination items-center justify-between py-12 px-8 hidden md:flex">
              <div>
                <p className="text-[12px] text-neutral font-medium leading-4.5">
                  Showing {epics.length} of {totalCount} epics
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
            onClick={() => navigate(`/project/${projectId}/epics/new`)}
            className="w-10 h-10 ml-auto md:hidden mt-8 fixed bottom-20 right-10 z-50"
          >
            <Button>
              <span className="text-body-md">+</span>
            </Button>
          </div>
        </section>
      )}
      {selectedEpic && (
        <EpicModal
          projectId={projectId}
          epicId={selectedEpic}
          onClose={() => setSelectedEpic(null)}
          onEpicUpdate={(updated) => {
            setEpics((prev) =>
              prev.map((e) => (e.id === updated.id ? updated : e)),
            );
          }}
        />
      )}
    </>
  );
}
