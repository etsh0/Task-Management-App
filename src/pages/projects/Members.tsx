import { useParams } from 'react-router-dom';
import MemberIcon from '../../assets/icons/MemberIcon';
import ProjectMembersSkeleton from '../../features/project-members/components/ProjectMembersSkeleton';
import Table from '../../features/project-members/components/Table';
import { useProjectMembers } from '../../features/project-members/hooks/useProjectMembers';
import Button from '../../shared/components/Button';
import ErrorState from '../../shared/components/ErrorState';
import Header from '../../shared/components/Header';
import { useBreadcrumb } from '../../shared/hooks/useBreadcrumb';
import InviteMemberModal from '../../features/project-members/components/InviteMemberModal';
import { useState } from 'react';
import { useUser } from '../../shared/hooks/useUser';

export default function Members() {
  const { projectId } = useParams();
  const { loading, error, members } = useProjectMembers(projectId);
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const breadcrumb = useBreadcrumb();
  const currentMember = members.find((member) => member.user_id === user?.id);
  const isOwner = currentMember?.role.toLowerCase() === 'owner';

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
            btnText={isOwner ? 'Invite Member' : ''}
            onClick={isOwner ? () => setIsOpen(true) : undefined}
          />
          <div className=" md:bg-[#F1F3FF] mx-auto rounded-lg">
            <Table />
          </div>
          {isOwner && (
            <div
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 ml-auto md:hidden mt-8 fixed bottom-20 right-10 z-50"
            >
              <Button>
                <MemberIcon />
              </Button>
            </div>
          )}
        </section>
      )}
      {isOwner && isOpen && (
        <InviteMemberModal projectId={projectId} setIsOpen={setIsOpen} />
      )}
    </>
  );
}
