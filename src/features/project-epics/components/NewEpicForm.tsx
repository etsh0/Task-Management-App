import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../shared/components/Button';
import { useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import config from '../../../config/env';
import { getAccessToken } from '../../auth/Login/cookie';
import { useEffect, useState } from 'react';
import type { ProjectMember } from '../../project-members/type';
import { getProjectMembers } from '../../project-members/api';

export default function NewEpicForm() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      if (!projectId) return;
      try {
        setError(null);
        const data = await getProjectMembers(projectId);
        setMembers(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchMembers();
    
  }, [projectId]);

  const addEpicSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().optional(),
    assignee_id: z.string().optional(),
    deadline: z
      .string()
      .optional()
      .refine(
        (date) => {
          if (!date) return true;
          const selectedDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return selectedDate >= today;
        },
        {
          message: 'Deadline must be today or in the future',
        },
      ),
  });

  type FormInputs = z.infer<typeof addEpicSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(addEpicSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const token = getAccessToken();
    const payload = {
      title: data.title,
      description: data.description,
      assignee_id: data.assignee_id || null,
      deadline: data.deadline,
      project_id: projectId,
    };
    const res = await fetch(config.apiUrl + '/rest/v1/epics', {
      method: 'POST',
      headers: {
        apiKey: config.anonKey,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="p-8 flex flex-col gap-8"
      >
        <label className="label flex-row items-center gap-40" htmlFor="">
          title
          <div className="flex flex-col gap-2 w-full">
            <input
              className={`input ${errors.title && 'input-error'}`}
              type="text"
              placeholder="e.g. Structural Foundation Phase"
              {...register('title')}
            />
            {errors.title && (
              <span className="text-error">{errors.title.message}</span>
            )}
          </div>
        </label>
        <label className={`label flex-row gap-28`} htmlFor="">
          <div className="flex flex-col">
            <span className="">Description</span>
            <span className="text-label-sm text-[#4F5F7B99] capitalize font-normal">
              Optional
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <textarea
              maxLength={500}
              className={`input h-37 resize-none`}
              placeholder="Provide a high-level overview of the project's architectural objectives and key milestones..."
              {...register('description')}
            />
            <div className="ml-auto text-label-sm text-[#4F5F7B99] lowercase font-medium leading-[16.5px]">
              {/* <span>{descriptionValue?.length || 0}</span> / 500 characters */}
              0 / 500 characters
            </div>
          </div>
        </label>
        <div className="grid grid-cols-2 items-center gap-8">
          <label className="label" htmlFor="">
            Assignee
            <select id="" className="input" {...register('assignee_id')}>
              <option value="">Select a member...</option>
              {members.map((member) => (
                <option key={member.member_id} value={member.user_id}>
                  {member.metadata.name}
                </option>
              ))}
            </select>
          </label>
          <label className="label" htmlFor="">
            Deadline
            <input
              type="date"
              id=""
              className={`input ${errors.deadline && 'input-error'}`}
              {...register('deadline')}
            />
            {errors.deadline && (
              <span className="text-error">{errors.deadline.message}</span>
            )}
          </label>
        </div>
        <div className="flex items-center justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => navigate(`/project/${projectId}/epics`)}
            className="text-[#4F5F7B] text-body-md font-semibold leading-5 cursor-pointer"
          >
            Cancel
          </button>
          <div className="w-fit">
            <Button>Create Epic</Button>
          </div>
        </div>
      </form>
    </>
  );
}
