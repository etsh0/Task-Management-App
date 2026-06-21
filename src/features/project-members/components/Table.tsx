import { useParams } from 'react-router-dom';
import MemberInfo from './MemberInfo';
import Role from './Role';
import { useProjectMembers } from '../hooks/useProjectMembers';

export default function Table() {
  const { projectId } = useParams();

  const { members } = useProjectMembers(projectId);

  return (
    <>
      {/* Desktop */}
      <table className="w-full hidden md:table">
        <thead className="bg-surface-highest">
          <tr className="">
            <th className="py-5 px-8 text-left uppercase text-neutral text-label-sm font-bold tracking-[1.1px]">
              member
            </th>
            <th className="py-5 px-8 uppercase text-neutral text-label-sm font-bold tracking-[1.1px]">
              role
            </th>
            <th className="py-5 px-8 uppercase text-neutral text-label-sm font-bold tracking-[1.1px]">
              actions
            </th>
          </tr>
        </thead>
        <tbody className="">
          {members.map((member) => (
            <tr key={member.member_id} className="border-t border-border ">
              <td className="px-9 py-5">
                <MemberInfo name={member.metadata.name} email={member.email} />
              </td>
              <td className="px-9 py-5">
                <Role
                  text={member.role}
                  owner={member.role.toLowerCase() === 'owner'}
                />
              </td>
              <td className="text-center">
                {member.role.toLowerCase() !== 'owner' && '⋮'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {members.map((member) => (
          <div
            key={member.member_id}
            className="flex items-center justify-between p-4 rounded-lg bg-[#FFFFFF]"
          >
            <div>
              <MemberInfo name={member.metadata.name} email={member.email} />
            </div>
            <div className="flex flex-col items-end gap-4">
              <Role
                text={member.role}
                owner={member.role.toLowerCase() === 'owner'}
              />
              {member.role.toLowerCase() !== 'owner' && <button>⋮</button>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
