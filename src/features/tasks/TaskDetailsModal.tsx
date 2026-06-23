import CopyIcon from '../../assets/icons/CopyIcon';
import EpicIcon from '../../assets/icons/EpicIcon';
import Select from 'react-select';

export default function TaskDetailsModal() {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 ">
        <div className="flex bg-white sahdow-[0px_25px_50px_-12px_#00000040] w-4xl h-[90%] rounded-lg">
          <div className="flex flex-col flex-1">
            <div className="py-6 px-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-surface-highest py-0.5 px-2 rounded-xs text-primary text-[12px] font-bold leading-4 tracking-[1.2px]">
                  Task-125
                </div>
                <div className="flex items-center gap-1.5 text-neutral font-medium leading-5">
                  <EpicIcon />
                  <span>EPIC-102 (Core UI Overhaul)</span>
                </div>
              </div>
              <p className="text-[30px] text-slate-one font-bold leading-9 mt-3">
                Implement glassmorphism effect on modals
              </p>
            </div>
            <div className="flex-1 pt-8 px-8">
              <h4 className="text-neutral text-[10px] font-bold leading-3.75 tracking-[0.5px] uppercase">
                Description
              </h4>
              <p className="mt-3 leading-[22.75px] text-body-md text-slate-one max-w-lg">
                Detailed task description goes here. This involves updating the
                modal container background to use semi-transparent surface
                colors with a 20px backdrop-blur to align with the Digital
                Curator aesthetic. Ensure contrast ratios remain accessible.
              </p>
            </div>
            <div className="flex items-center justify-between bg-surface-low py-4 px-8 rounded-lg">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
              >
                <CopyIcon />
                <span className="text-body-md text-neutral font-medium leading-5">
                  Copy Link
                </span>
              </button>
              <div className="bg-surface-highest py-2 px-4 rounded-sm">
                <button
                  type="button"
                  className="text-slate-one text-body-md font-semibold leading-5 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="p-8 bg-surface-low flex flex-col border-l border-border w-[320px] rounded-lg">
            {/* Status */}
            <div className="">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Status
              </h5>
              <Select
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: '4px',
                    backgroundColor: '#82f9be',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#041B3C',
                    lineHeight: '20px',
                    cursor: 'pointer',
                  }),
                }}
              />
            </div>
            {/* Assign */}
            <div className="mt-10">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Assign
              </h5>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-surface-highest uppercase text-slate-one text-label-sm font-bold">
                  Mt
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-one font-semibold text-body-md leading-5 capitalize">
                    Ahmed Hesham
                  </span>
                  <span className="text-neutral text-[10px] leading-3.75">
                    Frontend Deeloper
                  </span>
                </div>
              </div>
            </div>
            {/* Reporter */}
            <div className="mt-10">
              <h5 className="mb-4 text-[10px] font-bold leading-3.75 text-neutral uppercase">
                Reporter
              </h5>
              <div className="flex items-center gap-3 ">
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-surface-highest uppercase text-slate-one text-label-sm font-bold">
                  Mt
                </div>
                <span className="text-slate-one font-semibold text-body-md leading-5 capitalize">
                  Ahmed Hesham
                </span>
              </div>
            </div>
            {/* date */}
            <div className="pt-4 mt-7 border-t border-border flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-neutral text-[12px] leading-4">
                  Due Date
                </span>
                <span className="text-slate-one text-body-md font-medium leading-5">
                  22 Oct 2025
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral text-[12px] leading-4">
                  Created At
                </span>
                <span className="text-slate-one text-body-md font-medium leading-5">
                  22 Oct 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
