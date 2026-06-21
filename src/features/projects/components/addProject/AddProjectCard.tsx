import { useDispatch } from 'react-redux';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import type { AppDispatch } from '../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { clearSelectedProject } from '../../../../store/slices/ProjectsSlice';

export default function AddProjectCard() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleAddProject = () => {
    dispatch(clearSelectedProject());
    navigate('/project/add');
  };
  return (
    <>
      <div className="p-6 bg-[#FFFFFF] rounded-lg border border-dashed border-border items-center justify-center cursor-pointer hidden md:flex">
        <button
          type="button"
          onClick={() => handleAddProject()}
          className="flex flex-col items-center gap-4 cursor-pointer"
        >
          <div className="bg-surface-low w-12 h-12 flex items-center justify-center rounded-xl">
            <PlusIcon />
          </div>
          <span className="uppercase text-body-md text-neutral leading-5 tracking-[1.4px] font-bold">
            Add Project
          </span>
        </button>
      </div>
    </>
  );
}
