import ArrowLeft2 from '../../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../../assets/icons/ArrowRight2';

export default function Pagination() {
  return (
    <>
      <div className="flex items-center gap-2 text-label-sm cursor-pointer">
        <div className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-[#434654]">
          <ArrowLeft2 className="w-[4.32px] h-1.75" />
        </div>
        <div className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-white bg-primary">
          1
        </div>
        <div className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-[#434654]">
          2
        </div>
        <div className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-[#434654]">
          <ArrowRight2 className="w-[4.32px] h-1.75" />
        </div>
      </div>
    </>
  );
}
