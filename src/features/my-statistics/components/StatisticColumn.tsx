export default function StatisticColumn() {
  return (
    <>
      <div className="h-105 overflow-y-auto p-4 rounded-lg bg-white shadow-[0px_1px_2px_0px_#0000000D] ">
        <div className="header pb-4">
          <span className="text-[12px] text-neutral font-bold uppercase leading-4">
            Wed
          </span>
          <h5 className="text-title-md leading-7 font-bold text-slate-one capitalize">
            14 May
          </h5>
        </div>
        <div className="flex flex-col gap-2">
          <div className="row-tasks rounded-xs p-2 bg-surface-highest flex items-center justify-between">
            <span className="text-label-sm font-bold uppercase text-neutral leading-[11.5px]">
              To Do
            </span>
            <span className="text-[12px] text-slate-one font-bold leading-4">
              4
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
