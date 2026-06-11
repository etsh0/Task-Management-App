import type { ReactNode } from 'react';

type props = {
  title: string;
  p: string;
  icon: ReactNode;
};

export default function EmptyStateCard({ title, p, icon }: props) {
  return (
    <>
      <div className="flex flex-col gap-3 items-start rounded-lg bg-surface-low p-5">
        <div className="w-10 h-10 rounded-sm bg-white flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-slate-one text-[16px] leading-6 font-semibold">
          {title}
        </h3>
        <p className="text-[#434654] text-[12px] leading-5 text-left">{p}</p>
      </div>
    </>
  );
}
