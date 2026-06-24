const Bone = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-skeleton rounded ${className}`} />
);

export default function TaskDetailsBottomSheetSkeleton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 bg-white rounded-t-2xl h-[85vh] overflow-y-auto pb-10 px-6">
      {/* Top bar: task ID + close button */}
      <div className="flex items-center justify-between pt-8 pb-2">
        <Bone className="h-3 w-16" />
        <Bone className="h-6 w-6 rounded-full" />
      </div>

      {/* Title */}
      <Bone className="mt-2 h-7 w-4/5" />
      <Bone className="mt-2 h-7 w-3/5" />

      {/* Status + Epic badges */}
      <div className="flex items-center gap-2 mt-4">
        <Bone className="h-7 w-24 rounded-xl" />
        <Bone className="h-7 w-20 rounded-xl" />
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-3 mt-8">
        {/* Assign */}
        <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
          <Bone className="h-3 w-12" />
          <div className="flex items-center gap-2">
            <Bone className="w-6 h-6 rounded-xl flex-shrink-0" />
            <Bone className="h-4 w-20" />
          </div>
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
          <Bone className="h-3 w-16" />
          <div className="flex items-center gap-2">
            <Bone className="w-4 h-4 rounded flex-shrink-0" />
            <Bone className="h-4 w-20" />
          </div>
        </div>

        {/* Created By */}
        <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
          <Bone className="h-3 w-18" />
          <div className="flex items-center gap-2">
            <Bone className="w-6 h-6 rounded-xl flex-shrink-0" />
            <Bone className="h-4 w-20" />
          </div>
        </div>

        {/* Created At */}
        <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
          <Bone className="h-3 w-16" />
          <div className="flex items-center gap-2">
            <Bone className="w-4 h-4 rounded flex-shrink-0" />
            <Bone className="h-4 w-20" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <Bone className="h-3 w-20 mb-3" />
        <div className="border border-border rounded-lg p-5 mt-2 flex flex-col gap-2">
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  );
}
