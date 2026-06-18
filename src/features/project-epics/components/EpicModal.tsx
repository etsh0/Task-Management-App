import { useNavigate } from 'react-router-dom';
import CalenderIcon from '../../../assets/icons/CalenderIcon';
import CloseIcon from '../../../assets/icons/CloseIcon';
import EpicIcon from '../../../assets/icons/EpicIcon';
import ListIcon from '../../../assets/icons/ListIcon';
import Button from '../../../shared/components/Button';
import { formatDate } from '../../../shared/utils/formatDate';
// import { useProjectMembers } from '../../project-members/hooks/useProjectMembers';
import { useEpicDetails } from '../hooks/useEpicDetails';
import { useUpdateEpic } from '../hooks/useUpdateEpic';
import type { ProjectEpic } from '../type';
import { getInitials } from './../../../shared/utils/getInitials';

export default function EpicModal({
  projectId,
  epicId,
  onClose,
  onEpicUpdate,
}: {
  projectId?: string;
  epicId: string | null;
  onClose: () => void;
  onEpicUpdate: (updated: ProjectEpic) => void;
}) {
  const { epic, setEpic } = useEpicDetails(projectId ?? '', epicId ?? '');
  // const {members} = useProjectMembers(projectId)
  const navigate = useNavigate();

  // const [assigneeEditMode, setAssigneeEditMode] = useState(false);
  const { handleUpdate, saving } = useUpdateEpic(epic, (updated) => {
    setEpic(updated);
    onEpicUpdate(updated);
  });

  if (!epic) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 px-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white shadow-[0_25px_50px_-12px_#00000040] rounded-lg max-h-[90vh] w-2xl overflow-y-auto"
        >
          <header className="flex justify-between border-b border-border px-6 pt-6 pb-4 md:p-8 bg-surface-low md:bg-white">
            <div className="flex flex-col gap-1 md:gap-2">
              <div className="flex items-center gap-2">
                <div className="hidden md:block">
                  <EpicIcon />
                </div>
                <span className="text-slate-one/60 font-bold text-[10px] leading-4 uppercase tracking-[0.6px]">
                  {epic?.epic_id}
                </span>
              </div>
              {/* Title */}
              <input
                aria-label="Epic title"
                disabled={saving}
                defaultValue={epic.title}
                onBlur={(e) => {
                  const newTitle = e.target.value.trim();
                  if (newTitle && newTitle !== epic.title) {
                    handleUpdate({ title: newTitle });
                  }
                }}
                className="text-slate-one font-bold text-[20px] md:text-[24px] leading-8 bg-transparent border-b border-transparent hover:border-border focus:border-primary focus:outline-none w-full"
              />
            </div>
            <div onClick={onClose} className="cursor-pointer">
              <CloseIcon />
            </div>
          </header>
          <div className="p-8">
            {/* Description */}
            <textarea
              disabled={saving}
              defaultValue={epic.description ?? ''}
              placeholder="No description provided"
              onBlur={(e) => {
                const newDesc = e.target.value.trim();
                if (newDesc !== (epic.description ?? '')) {
                  handleUpdate({ description: newDesc || null });
                }
              }}
              className="text-slate-one/80 leading-6.5 bg-transparent border-b border-transparent hover:border-border focus:border-primary focus:outline-none w-full resize-none"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
              <div className="flex flex-col gap-[8.5px]">
                <span className="text-slate-one/40 text-[10px] leading-3.75 uppercase font-bold">
                  Created By
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary flex items-center justify-center rounded-xl text-white text-[10px] font-bold leading-5">
                    {getInitials(epic?.created_by.name)}
                  </div>
                  <span className="text-slate-one text-body-md leading-5 font-medium">
                    {epic?.created_by.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8.5px]">
                <span className="text-slate-one/40 text-[10px] leading-3.75 uppercase font-bold">
                  Assignee
                </span>
                {epic?.assignee?.name ? (
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#CDDDFF] flex items-center justify-center rounded-xl text-[#51617E] text-[10px] font-bold leading-5">
                      {getInitials(epic.assignee.name)}
                    </div>
                    <span className="text-slate-one text-body-md leading-5 font-medium">
                      {epic.assignee.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-slate-one">Unassigned</span>
                )}
              </div>
              {epic?.created_at && (
                <div className="flex flex-col gap-[8.5px]">
                  <span className="text-slate-one/40 text-[10px] leading-3.75 uppercase font-bold">
                    Created At
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="h-7 flex items-center justify-center rounded-xl ">
                      <CalenderIcon />
                    </div>
                    <span className="text-slate-one text-body-md leading-5 font-medium">
                      {formatDate(epic?.created_at)}
                    </span>
                  </div>
                </div>
              )}
              {/* Deadline */}
              <div className="flex flex-col gap-[8.5px]">
                <span className="text-slate-one/40 text-[10px] leading-3.75 uppercase font-bold">
                  Deadline
                </span>
                <div className="flex items-center gap-2">
                  {/* <CalenderIcon /> */}
                  <input
                    aria-label="Epic deadline"
                    type="date"
                    disabled={saving}
                    defaultValue={epic.deadline ?? ''}
                    onChange={(e) => {
                      const newDeadline = e.target.value || null;
                      handleUpdate({ deadline: newDeadline });
                    }}
                    className="text-slate-one text-body-md leading-5 font-medium bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tasks px-8 pb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-one text-label-sm md:text-title-md leading-7 font-semibold uppercase">
                Tasks
              </h3>
              <button
                onClick={() => navigate(`/project/${projectId}/tasks/new`)}
                type="button"
                className="text-primary text-body-md font-semibold leading-5 hidden md:block cursor-pointer"
              >
                + Add Task
              </button>
              <div className="md:hidden text-[10px] font-bold leading-3.75 text-[#434654] bg-surface-low px-2 py-0.5 uppercase rounded-xl">
                0 Tasks
              </div>
            </div>
            <div className="mt-6 bg-surface-low p-12 rounded-lg border-dashed border-2 border-border flex flex-col gap-4 items-center justify-center">
              <div className="p-4 bg-surface-highest rounded-xl">
                <ListIcon />
              </div>
              <p className="text-slate-one font-medium leading-6 text-center">
                No tasks have been added to this epic yet
              </p>
              <div
                onClick={() => navigate(`/project/${projectId}/tasks/new`)}
                className="w-fit"
              >
                <Button>+ Add Task</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
