export default function ListView() {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Task Id
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Title
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Status
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Due Date
            </th>
            <th className="py-4 px-6 text-left text-label-sm text-neutral font-bold tracking-[0.55px] uppercase">
              Assignee
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="py-4 px-6 text-[12px] text-primary leading-4 uppercase">
              TASK-125
            </td>
            <td className="py-4 px-6 text-body-md text-slate-one font-medium">
              Develop responsive bento grid components
            </td>
            <td className="py-4 px-6 ">
              <div className="bg-[#CDDDFF] text-center text-[#374763] uppercase py-1 px-2 rounded-xs text-label-sm font-bold">
                IN PROGRESS
              </div>
            </td>
            <td className="py-4 px-6 text-neutral text-body-md">
              25 Oct 2025
            </td>
            <td className="py-4 px-6 flex items-center gap-3">
              <div className="bg-[#DAE2FF] w-7 h-7 rounded-xl flex items-center justify-center text-slate-one text-label-sm font-bold">
                JD
              </div>
              <span className="text-body-md text-slate-one">John Doe</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
