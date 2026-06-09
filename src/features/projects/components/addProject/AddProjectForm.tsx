import Button from '../../../../shared/components/Button';

export default function AddProjectForm() {
  return (
    <>
      <form className="py-8 flex flex-col gap-12">
        <label className={`label `} htmlFor="">
          <span className="">Project TITLE </span>
          <input
            className={`input `}
            type="text"
            placeholder="Enter Project Title"
            // {...register('email')}
          />
          {/* {errors.email && (
                    <span className="text-error">{errors.email.message}</span>
                )} */}
        </label>
        <label className={`label`} htmlFor="">
          <div className="flex items-center justify-between">
            <span className="">Description</span>
            <span className="text-label-sm text-[#4F5F7B99] capitalize font-normal">
              Optional
            </span>
          </div>
          <textarea
            className={`input h-37 resize-none`}
            placeholder="Provide a high-level overview of the project's architectural objectives and key milestones..."
            // {...register('email')}
          />
          <div className="ml-auto text-label-sm text-[#4F5F7B99] lowercase mt-1 font-medium leading-[16.5px]">
            0 / 500 characters
          </div>
          {/* {errors.email && (
                    <span className="text-error">{errors.email.message}</span>
                )} */}
        </label>
        <div className="flex items-center justify-between">
          <button className="text-[#4F5F7B] text-body-md font-bold leading-5 cursor-pointer">
            Back
          </button>
          <div className="w-fit">
            <Button>Create Project</Button>
          </div>
        </div>
      </form>
    </>
  );
}

// ${errors.email && 'input-error'}
// ${errors.email && 'text-error'}
