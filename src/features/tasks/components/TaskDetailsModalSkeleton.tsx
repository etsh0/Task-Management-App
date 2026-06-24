const Bone = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-skeleton rounded ${className}`} />
);

export default function TaskDetailsModalSkeleton() {
  return (
    <div className="flex bg-white md:w-3xl lg:w-4xl h-[90%] rounded-lg overflow-hidden">
      {/* ── Left panel ── */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="py-6 px-8 border-b border-border">
          <div className="flex items-center gap-3">
            <Bone className="h-5 w-16 rounded-xs" />
            <Bone className="h-5 w-32" />
          </div>
          <Bone className="mt-3 h-8 w-3/4" />
          <Bone className="mt-2 h-8 w-1/2" />
        </div>

        {/* Description */}
        <div className="flex-1 pt-8 px-8">
          <Bone className="h-3 w-20 mb-3" />
          <Bone className="h-4 w-full mb-2" />
          <Bone className="h-4 w-full mb-2" />
          <Bone className="h-4 w-5/6 mb-2" />
          <Bone className="h-4 w-4/6" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between bg-surface-low py-4 px-8 rounded-lg">
          <Bone className="h-5 w-24" />
          <Bone className="h-9 w-20 rounded-sm" />
        </div>
      </div>

      {/* ── Right sidebar ── */}
      <div className="p-8 bg-surface-low flex flex-col border-l border-border w-[320px] rounded-lg">
        {/* Status */}
        <div>
          <Bone className="h-3 w-12 mb-4" />
          <Bone className="h-10 w-full rounded-sm" />
        </div>

        {/* Assign */}
        <div className="mt-10">
          <Bone className="h-3 w-12 mb-4" />
          <div className="flex items-center gap-3 bg-white rounded-lg p-3">
            <Bone className="w-7 h-7 rounded-xl flex-shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
              <Bone className="h-4 w-28" />
            </div>
          </div>
        </div>

        {/* Reporter */}
        <div className="mt-10">
          <Bone className="h-3 w-16 mb-4" />
          <div className="flex items-center gap-3">
            <Bone className="w-7 h-7 rounded-xl flex-shrink-0" />
            <Bone className="h-4 w-28" />
          </div>
        </div>

        {/* Dates */}
        <div className="pt-4 mt-7 border-t border-border flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Bone className="h-3 w-14" />
            <Bone className="h-4 w-24" />
          </div>
          <div className="flex items-center justify-between">
            <Bone className="h-3 w-16" />
            <Bone className="h-4 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
