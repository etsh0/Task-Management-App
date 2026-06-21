import { useDispatch } from 'react-redux';
import { formatDate } from '../../../shared/utils/formatDate';
import type { Project } from '../type';
import type { AppDispatch } from '../../../store/store';
import { setSelectedProject } from '../../../store/slices/ProjectsSlice';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }: { project: Project }) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSelectedProject = () => {
    dispatch(setSelectedProject(project));
    navigate(`/project/${project.id}/epics`);
  };

  return (
    <>
      <div
        onClick={handleSelectedProject}
        className="flex flex-col gap-6 p-6 bg-[#FFFFFF] rounded-lg cursor-pointer"
      >
        <div className="">
          <div className="flex justify-between items-start">
            <h3 className="text-title-md text-slate-one font-medium leading-7 mb-3.5">
              {project.name}
            </h3>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setSelectedProject(project));
                navigate(`/project/${project.id}/edit`);
              }}
              className="cursor-pointer"
            >
              ✏️
            </button>
          </div>

          <p className="text-neutral text-body-md leading-[22.75px]">
            {project.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="uppercase text-label-sm font-bold text-[#737685] leading-[16.5px] tracking-[-0.55px]">
            CREATED AT
          </span>
          <span className="text-body-md leading-5 font-medium text-neutral">
            {formatDate(project.created_at)}
          </span>
        </div>
      </div>
    </>
  );
}
