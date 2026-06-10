import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../shared/components/Button';
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../store/store';
import {
  addProject,
  clearSelectedProject,
  updateProject,
} from '../../../../store/slices/ProjectsSlice';
import Spinner from '../../../../shared/components/Spinner';
import { toast } from 'react-toastify';

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { projectId } = useParams();

  const { loading, selectedProject } = useSelector(
    (state: RootState) => state.projects,
  );

  const addProjectSchema = z.object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(100, 'Name must be at most 100 characters'),
    description: z.string().optional().nullable(),
  });

  type FormInputs = z.infer<typeof addProjectSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(addProjectSchema),
    values: selectedProject
      ? {
          name: selectedProject.name,
          description: selectedProject.description || '',
        }
      : {
          name: '',
          description: '',
        },
  });

  const descriptionValue = useWatch({
    control,
    name: 'description',
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const addPayload = {
      name: data.name,
      description: data.description || '',
    };
    const updatePayload = {
      project_id: selectedProject?.id as string,
      data: {
        name: data.name,
        description: data.description || '',
      },
    };

    try {
      if (selectedProject) {
        await dispatch(updateProject(updatePayload));
        navigate('/project');
        dispatch(clearSelectedProject());
        toast.success('Project updated successfully');
      } else {
        await dispatch(addProject(addPayload));
        reset();
        navigate('/project');
        toast.success('Project created successfully');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-8 flex flex-col gap-12"
      >
        <label className={`label ${errors.name && 'text-error'}`} htmlFor="">
          <span className="">Project TITLE </span>
          <input
            className={`input ${errors.name && 'input-error'}`}
            type="text"
            placeholder="Enter Project Title"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-error">{errors.name?.message}</span>
          )}
        </label>
        <label className={`label`} htmlFor="">
          <div className="flex items-center justify-between">
            <span className="">Description</span>
            <span className="text-label-sm text-[#4F5F7B99] capitalize font-normal">
              Optional
            </span>
          </div>
          <textarea
            maxLength={500}
            className={`input h-37 resize-none`}
            placeholder="Provide a high-level overview of the project's architectural objectives and key milestones..."
            {...register('description')}
          />
          <div className="ml-auto text-label-sm text-[#4F5F7B99] lowercase mt-1 font-medium leading-[16.5px]">
            <span>{descriptionValue?.length || 0}</span> / 500 characters
          </div>
        </label>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              navigate(projectId ? `/project/${projectId}/epics` : '/project')
            }
            className="text-[#4F5F7B] text-body-md font-bold leading-5 cursor-pointer"
          >
            Back
          </button>
          <div className="w-fit">
            <Button>
              {loading ? (
                <Spinner />
              ) : selectedProject ? (
                'Save Changes'
              ) : (
                'Create Project'
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
