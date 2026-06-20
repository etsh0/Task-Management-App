import { useParams } from 'react-router-dom';
import MemberIcon from '../../assets/icons/MemberIcon';
import ProjectMembersSkeleton from '../../features/project-members/components/ProjectMembersSkeleton';
import Table from '../../features/project-members/components/Table';
import { useProjectMembers } from '../../features/project-members/hooks/useProjectMembers';
import Button from '../../shared/components/Button';
import ErrorState from '../../shared/components/ErrorState';
import Header from '../../shared/components/Header';
import { useBreadcrumb } from '../../shared/hooks/useBreadcrumb';

export default function Members() {
  const { projectId } = useParams();
  const { loading, error } = useProjectMembers(projectId);
  const breadcrumb = useBreadcrumb();

  if (error)
    return (
      <ErrorState text="We are having trouble retrieving your project members right now. Please try again in a moment." />
    );
  return (
    <>
      {loading ? (
        <ProjectMembersSkeleton />
      ) : (
        <section className="px-8 pt-8 pb-41.25">
          <Header
            title="Project Members"
            breadcrumb={breadcrumb}
            btnText="Invite Member"
          />
          <div className=" md:bg-[#F1F3FF] mx-auto rounded-lg">
            <Table />
          </div>
          <div className="w-10 h-10 ml-auto md:hidden mt-8 fixed bottom-20 right-10 z-50">
            <Button>
              <MemberIcon />
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
