const SKELETON_ROWS = 5;

function SkeletonCell({ width }: { width: string }) {
  return (
    <div className={`h-4 rounded-sm bg-skeleton animate-pulse ${width}`} />
  );
}

function SkeletonBadge() {
  return <div className="h-6 w-24 rounded-xs bg-skeleton animate-pulse" />;
}

function SkeletonAssignee() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-xl bg-skeleton animate-pulse shrink-0" />
      <div className="h-4 w-24 rounded-sm bg-skeleton animate-pulse" />
    </div>
  );
}

function SkeletonDotsIcon() {
  return (
    <div className="flex flex-col gap-0.75 items-center">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full bg-skeleton animate-pulse"
        />
      ))}
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="border-b border-[#F1F3FF] shadow-[0px_1px_2px_0px_#0000000D]">
      {/* Task Id */}
      <td className="py-4 px-6">
        <SkeletonCell width="w-16" />
      </td>
      {/* Title */}
      <td className="py-4 px-6">
        <SkeletonCell width="w-48" />
      </td>
      {/* Status */}
      <td className="py-4 px-6">
        <SkeletonBadge />
      </td>
      {/* Due Date */}
      <td className="py-4 px-6">
        <SkeletonCell width="w-28" />
      </td>
      {/* Assignee */}
      <td className="py-4 px-6">
        <SkeletonAssignee />
      </td>
      {/* Actions */}
      <td className="py-4 px-6">
        <SkeletonDotsIcon />
      </td>
    </tr>
  );
}

export default function ListViewSkeleton() {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F1F3FF] shadow-[0px_1px_2px_0px_#0000000D]">
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
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </tbody>
        <tfoot className="bg-white">
          <tr>
            <td className="py-4 px-6" colSpan={6}>
              <div className="pagination flex items-center justify-between w-full">
                <div className="h-4 w-32 rounded-sm bg-skeleton animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-sm bg-skeleton animate-pulse" />
                  <div className="h-4 w-20 rounded-sm bg-skeleton animate-pulse" />
                  <div className="w-5 h-5 rounded-sm bg-skeleton animate-pulse" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
