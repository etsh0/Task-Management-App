import CalenderIcon from '../../../../assets/icons/CalenderIcon';

export default function TaskCard() {
  return (
    <>
      <div
        className={`relative rounded-lg border p-4 flex flex-col gap-4 sahdow-[0px_2px_8px_0px_#00000005]${'bg-white border-border'}`}
      >
        <p className="text-slate-one font-medium text-body-md leading-[19.25px]">
          Incorporate stakeholder feedback from v1.2 Review
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-label-sm leading-4">
            <span className="text-[#94A3B8] text-[10px] font-bold leading-3.75 uppercase flex items-center gap-1">
              <CalenderIcon />
              oct 12
            </span>
          </div>
          <div className="h-6 w-6 bg-surface-highest text-slate-one text-[10px] font-bold uppercase flex items-center justify-center rounded-full">
            mt
          </div>
        </div>
      </div>
    </>
  );
}
