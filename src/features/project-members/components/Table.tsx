import MemberInfo from './MemberInfo';
import Role from './Role';

export default function Table() {
  return (
    <>
      {/* Desktop */}
      <table className="w-full hidden md:table">
        <thead className="bg-surface-highest">
          <tr className="">
            <th className="py-5 px-8 text-left uppercase text-[#434654] text-label-sm font-bold tracking-[1.1px]">
              member
            </th>
            <th className="py-5 px-8 uppercase text-[#434654] text-label-sm font-bold tracking-[1.1px]">
              role
            </th>
            <th className="py-5 px-8 uppercase text-[#434654] text-label-sm font-bold tracking-[1.1px]">
              actions
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-t border-border ">
            <td className="px-9 py-5">
              <MemberInfo
                name={'Ahmed Hesham'}
                email={'ahmed.hesham.dev0@gmail.com'}
              />
            </td>
            <td className="px-9 py-5">
              <Role text="Owner" owner={true} />
            </td>
            <td></td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-9 py-5">
              <MemberInfo name="Mahmoud Taha" email="mahmoud.taha@gmail.com" />
            </td>
            <td className="px-9 py-5">
              <Role text="Admin" owner={false} />
            </td>
            <td className="px-9 py-5 text-right">
              <button type="button" className="cursor-pointer">
                ⋮
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#FFFFFF]">
          <div>
            <MemberInfo name="Jordan Diaz" email="jordan.diaz@design.co" />
          </div>
          <div className="flex flex-col items-end gap-4">
            <Role text="Viewer" />
            <button>⋮</button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#FFFFFF]">
          <div>
            <MemberInfo name="Jordan Diaz" email="jordan.diaz@design.co" />
          </div>
          <div className="flex flex-col items-end gap-4">
            <Role text="Viewer" />
            <button>⋮</button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#FFFFFF]">
          <div>
            <MemberInfo name="Jordan Diaz" email="jordan.diaz@design.co" />
          </div>
          <div className="flex flex-col items-end gap-4">
            <Role text="Viewer" />
            <button>⋮</button>
          </div>
        </div>
      </div>
    </>
  );
}
