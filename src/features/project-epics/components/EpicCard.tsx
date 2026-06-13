import CalenderIcon from '../../../assets/icons/CalenderIcon';
import CreatedbyIcon from '../../../assets/icons/CreatedbyIcon';
import ThreeDots from '../../../assets/icons/ThreeDots';
import { formatDate } from '../../../shared/utils/formatDate';

import { getInitials } from '../../../shared/utils/getInitials';
import type { ProjectEpic } from '../type';

export default function EpicCard({ epic }: { epic: ProjectEpic }) {
  return (
    <>
      <div className="p-4 rounded-lg lg:border-l-4 border-[#004E32] shadow-[0px_1px_2px_0px_#0000000D] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="bg-surface-highest lg:bg-success py-1 px-2.5 rounded-xs text-primary lg:text-[#005235] uppercase text-[10px] font-bold leading-3.75 tracking-[0.5px]">
            {epic.epic_id}
          </span>
          <span>
            <ThreeDots />
          </span>
        </div>
        <p className="text-slate-one text-[20px] font-semibold leading-7">
          {epic.title}
        </p>
        <div className="flex items-center gap-3">
          <div className="bg-primary lg:bg-success w-10 h-10 rounded-xl text-white lg:text-black font-bold text-body-md leading-5 uppercase flex items-center justify-center">
            {getInitials(epic.assignee?.name)}
          </div>
          <div className="flex flex-col">
            <span className="text-[#434654] text-label-sm font-medium leading-4">
              Assignee
            </span>
            <span className="text-body-md text-slate-one leading-5 font-semibold">
              {epic.assignee?.name}
            </span>
          </div>
        </div>
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreatedbyIcon />
            <div className="text-[#434654CC] text-label-sm font-semibold">
              Created by:{' '}
              <span className="text-slate-one text-label-sm font-semibold">
                {epic.created_by.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalenderIcon />
            <span className="text-[#434654CC] text-label-sm">
              {formatDate(epic.created_at)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
