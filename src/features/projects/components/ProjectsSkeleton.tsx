export default function ProjectsSkeleton() {
  return (
    <>
      <section className="p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">
              Projects
            </h2>
            <p className="text-[16px] leading-6 text-[#434654]">
              Manage and curate your projects
            </p>
          </div>
          <div className="h-10 w-52.25 bg-[#E8EDFF] rounded-xs px-4 py-2 animate-pulse" />
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-pulse">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border border-border rounded-lg p-6 ">
              <div className="h-32 w-full bg-[#E8EDFF] rounded-sm mb-4" />

              <div className="h-6 w-[190.5px] bg-[#E8EDFF] rounded-xs mb-4" />

              <div className="h-4 w-31.75 bg-[#E8EDFF] rounded-xs" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
