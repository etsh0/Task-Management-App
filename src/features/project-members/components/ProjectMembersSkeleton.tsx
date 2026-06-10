export default function ProjectMembersSkeleton() {
  const rows = Array.from({ length: 5 });
  return (
    <>
      <div className="p-8 bg-background rounded-lg w-full">
        <header className="flex items-center justify-between animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-16 h-3 rounded-xs bg-skeleton" />
              <span className="text-[#C3C6D6]">/</span>
              <div className="w-24 h-3 rounded-xs bg-skeleton" />
            </div>
            <div className="w-[256px] h-10 rounded-sm bg-skeleton" />
            <div className="w-[384px] h-4 bg-skeleton rounded-lg" />
          </div>
          <div className="w-40 h-12 bg-skeleton rounded-sm" />
        </header>
        <section className="p-8 bg-[#FFFFFF] w-full mt-12">
          {/* header */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-8">
              <div className="h-3 w-8 rounded-xs bg-skeleton animate-pulse" />
              <div className="h-3 w-24 rounded-xs bg-skeleton animate-pulse" />
            </div>
            <div className="h-3 w-24 rounded-xs bg-skeleton animate-pulse" />
            <div className="h-3 w-16 rounded-xs bg-skeleton animate-pulse" />
            <div className="" />
          </div>
          {rows.map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-8 border-b border-border animate-pulse"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-xl bg-skeleton" />
                <div className="w-48 h-5 bg-skeleton rounded-xs" />
              </div>
              <div className="w-40 h-4 bg-skeleton rounded-xs" />
              <div className="w-20 h-6 bg-skeleton rounded-xs" />
              <div className="w-6 h-6 bg-skeleton rounded-xs" />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

// rows.map((_, i)
