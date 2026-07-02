import type { ReactNode } from 'react';

type props = {
  title: string;
  count: number;
  icon: ReactNode;
  bg: string;
  isOverdue?: boolean;
};

export default function StatisticCard({
  title,
  count,
  bg,
  icon,
  isOverdue,
}: props) {
  return (
    <>
      <div className="flex items-center justify-between rounded-lg p-6 bg-white">
        <div className="flex flex-col gap-1">
          <h5 className="text-[10px] md:text-[12px] font-bold leading-4 tracking-[0.6px] uppercase">
            {title}
          </h5>
          <span
            className={`text-[30px] font-bold ${isOverdue ? 'text-error' : 'text-salte-one'} leading-9`}
          >
            {count}
          </span>
        </div>
        <div
          className={`w-12 h-12 rounded-xs flex items-center justify-center`}
          style={{ backgroundColor: bg }}
        >
          {icon}
        </div>
      </div>
    </>
  );
}
