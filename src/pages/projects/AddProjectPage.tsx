import RightCheck from '../../assets/icons/RightCheck';
import TipIcon from '../../assets/icons/TipIcon';
import AddProjectForm from '../../features/projects/components/addProject/AddProjectForm';
import Header from '../../features/projects/components/Header';

export default function AddProjectPage() {
  return (
    <>
      <section className="px-8 pt-8 pb-41.25">
        <Header title="Add New Project" breadcrumb="Add New Project" />
        <div className="flex flex-col w-168.25 bg-[#FFFFFF] mx-auto px-8 pt-8">
          <div className="pb-10 flex items-center gap-4 border-b border-border">
            <div className="w-11.5 h-11.5 flex items-center justify-center bg-background rounded-sm">
              <RightCheck />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[24px] font-semibold leading-8 text-slate-one">
                Initialize New Project
              </h3>
              <p className="text-[#4F5F7B] text-body-md leading-5">
                Define the scope and foundational details of your project.
              </p>
            </div>
          </div>
          <AddProjectForm />
        </div>
        <div className="w-168.25 mx-auto flex items-center gap-3 bg-surface-low p-6">
          <TipIcon />
          <div className="text-label-sm text-[#4F5F7B]">
            <span className="font-bold">Pro Tip:</span> You can invite project
            members and assign epics immediately after the initial creation
            process.
          </div>
        </div>
      </section>
    </>
  );
}
