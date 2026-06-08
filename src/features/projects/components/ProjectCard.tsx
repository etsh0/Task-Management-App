export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-col gap-6 p-6 bg-[#FFFFFF] rounded-lg">
        <div className="">
          <h3 className="text-title-md text-slate-one font-medium leading-7 mb-3.5">
            Skyline Residence Phase II
          </h3>
          <p className="text-[#434654] text-body-md leading-[22.75px]">
            Structural review and aesthetic curation for the high-rise
            residential complex in the downtown district.
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="uppercase text-label-sm font-bold text-[#737685] leading-[16.5px] tracking-[-0.55px]">
            CREATED AT
          </span>
          <span className="text-body-md leading-5 font-medium text-[#434654]">
            12 Oct 2025
          </span>
        </div>
      </div>
    </>
  );
}
