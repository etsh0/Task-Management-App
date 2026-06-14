import ArrowLeft2 from '../../../assets/icons/ArrowLeft2';

export default function EpicsSkeleton() {
  const rows = Array.from({ length: 6 });
  return (
    <>
      <section className="px-8 pt-8 pb-25">
        <header className="flex items-end justify-between animate-pulse">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-16 h-4 bg-skeleton rounded-xs"></span>
              <span>
                <ArrowLeft2 className="w-0.75 h-1.5" />
              </span>
              <span className="w-24 h-4 bg-skeleton rounded-xs"></span>
            </div>
            <div className="max-w-[256px] h-10 bg-skeleton rounded-sm" />
          </div>
          <div className="lg:flex items-center gap-4 hidden">
            <div className="bg-skeleton rounded-xs h-10 w-32" />
            <div className="bg-skeleton rounded-xs h-10 w-40" />
          </div>
        </header>
        {/* card skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 animate-pulse">
          {rows.map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="bg-skeleton rounded-sm w-20 h-5" />
                <div className="bg-skeleton rounded-xl w-8 h-8" />
              </div>

              <div className="bg-skeleton max-w-109 h-6" />

              <div className="flex items-center gap-3">
                <div className="bg-skeleton rounded-xl w-8 h-8" />
                <div className="bg-skeleton rounded-sm w-32 h-4" />
              </div>

              <div className="bg-skeleton w-full h-1.5 rounded-xs" />

              <div className="flex items-center justify-between">
                <div className="bg-skeleton rounded-xs w-12 h-3" />
                <div className="bg-skeleton rounded-xs w-12 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
