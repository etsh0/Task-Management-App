import CalenderIcon from '../../../assets/icons/CalenderIcon';
import CheckIcon from '../../../assets/icons/CheckIcon';
import ClockIcon from '../../../assets/icons/ClockIcon';
import CloseIcon from '../../../assets/icons/CloseIcon';
import EpicIcon2 from '../../../assets/icons/EpicIcon2';

export default function TaskDetailsBottomSheet() {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 ">
        <div className="fixed bottom-0 left-0 right-0 z-100 bg-white rounded-t-2xl h-[80vh] overflow-y-auto pb-10 px-6">
          <div className="flex items-center justify-between pt-8 pb-2">
            <div className="text-neutral text-[10px] font-bold leading-3.75 tracking-[0.5px] uppercase">
              Task-90
            </div>
            <div>
              <CloseIcon />
            </div>
          </div>
          <p className="mt-2 leading-7.5 font-semibold text-[24px] text-slate-one w-85.5">
            Implement glassmorphism effect on modals
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-success rounded-xl py-1 px-3 flex items-center gap-2 text-slate-one leading-[16.5px] font-bold text-label-sm">
              <CheckIcon />
              <span className="uppercase">Completed</span>
            </div>
            <div className="bg-surface-low rounded-xl py-1 px-3 flex items-center gap-2 text-[#374763] leading-[16.5px] font-bold text-label-sm">
              <EpicIcon2 />
              <span className="uppercase">Epic-102</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Assign
              </h5>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-xl pt-1 pb-1.25 bg-surface-highest uppercase text-primary text-[10px] font-bold">
                  Ah
                </div>
                <span className="text-body-md font-medium leading-5 text-slate-one">
                  Ahmed Hesham
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Due Date
              </h5>
              <div className="flex items-center gap-2">
                <CalenderIcon />
                <span className="text-body-md font-medium text-slate-one leading-5">
                  22 Oct 2025
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Created By
              </h5>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-xl pt-1 pb-1.25 bg-surface-highest uppercase text-neutral text-[10px] font-bold">
                  Ah
                </div>
                <span className="text-body-md font-medium leading-5 text-slate-one">
                  Ahmed Hesham
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface-low rounded-lg p-4">
              <h5 className="text-label-sm font-bold leading-[16.5px] text-neutral uppercase">
                Created At
              </h5>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <span className="text-body-md font-medium text-slate-one leading-5">
                  22 Oct 2025
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h5 className="text-label-sm font-bold leading-5 text-neutral uppercase">
              Description
            </h5>
            <div className="shadow-[0px_1px_2px_0px_#0000000D] bg-white rounded-lg text-label-sm text-neutral border border-border p-5 mt-2">
              Detailed task description goes here. This involves updating the
              modal container background to use semi-transparent surface colors
              with a 20px backdrop-blur to align with the Digital Curator
              aesthetic. Ensure contrast ratios remain accessible.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
