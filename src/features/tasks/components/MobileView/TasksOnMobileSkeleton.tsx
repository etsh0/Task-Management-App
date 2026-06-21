const SKELETON_CARDS = 5;

function SkeletonCard() {
  return (
    <div className="task p-4 rounded-lg flex flex-col gap-3 shadow-[0px_4px_24px_0px_#041B3C0A] bg-white">
      {/* Top row: id + title on the left, status badge on the right */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          {/* Task ID */}
          <div className="h-3 w-14 rounded-sm bg-skeleton animate-pulse" />
          {/* Title */}
          <div className="h-4 w-44 rounded-sm bg-skeleton animate-pulse" />
        </div>
        {/* Status badge */}
        <div className="h-6 w-20 rounded-xs bg-skeleton animate-pulse" />
      </div>

      {/* Bottom row: assignee avatar + due date on the left, three-dots on the right */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-7 h-7 rounded-xl bg-skeleton animate-pulse shrink-0" />
          <div className="flex flex-col gap-1">
            {/* "DUE DATE" label */}
            <div className="h-3 w-16 rounded-sm bg-skeleton animate-pulse" />
            {/* Date value */}
            <div className="h-3 w-24 rounded-sm bg-skeleton animate-pulse" />
          </div>
        </div>
        {/* Three-dots icon */}
        <div className="flex flex-col gap-0.75 items-center">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-skeleton animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TasksOnMobileSkeleton() {
  return (
    <div className="flex flex-col gap-3 mt-6 pb-15">
      {Array.from({ length: SKELETON_CARDS }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
