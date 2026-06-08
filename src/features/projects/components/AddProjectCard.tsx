import PlusIcon from "../../../assets/icons/PlusIcon";

export default function AddProjectCard() {
  return (
    <>
        <div className="p-6 bg-[#FFFFFF] rounded-lg border border-dashed border-border items-center justify-center cursor-pointer hidden md:flex">
            <div className="flex flex-col items-center gap-4">
                <div className="bg-surface-low w-12 h-12 flex items-center justify-center rounded-xl">
                    <PlusIcon />
                </div>
                <span className="uppercase text-body-md text-[#434654] leading-5 tracking-[1.4px] font-bold">Add Project</span>
            </div>
        </div>
    </>
  )
}
