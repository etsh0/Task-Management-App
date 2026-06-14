import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../shared/components/Button';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { addNewEpic } from '../api';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from '../../../shared/components/Spinner';
import { useProjectMembers } from '../../project-members/hooks/useProjectMembers';
import Select from 'react-select';

export default function NewEpicForm() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { members } = useProjectMembers(projectId);
  const [loading, setLoading] = useState(false);

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

  const memberOptions = members.map((member) => ({
    value: member.user_id,
    label: member.metadata.name,
  }));

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(addEpicSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!projectId) return;
    const payload = {
      title: data.title,
      description: data.description || null,
      assignee_id: data.assignee_id || null,
      deadline: data.deadline || null,
      project_id: projectId,
    };

    try {
      setLoading(true);
      await addNewEpic(payload);
      reset();
      toast.success('Epic Created successfully');
      navigate(`/project/${projectId}/epics`);
    } catch (error) {
      console.log(error);
      toast.error('Failed to create epic');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="py-8 flex flex-col gap-8"
      >
        <label
          className="label flex flex-col md:items-center md:flex-row"
          htmlFor=""
        >
          <div className="mr-17 flex items-center gap-1">
            title
            <span className="text-error">*</span>
          </div>
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
        <label className={`label flex flex-col md:flex-row `} htmlFor="">
          <div className="flex flex-col mr-8">
            <span className="">Description</span>
            <span className="text-label-sm text-[#4F5F7B99] capitalize font-normal hidden md:block">
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <label className="label" htmlFor="">
            Assignee
            <Controller
              name="assignee_id"
              control={control}
              render={({ field }) => (
                <Select
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: '#d7e2ff',
                      borderColor: '#E5E7EB',
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      padding: '12px 16px',
                      borderRadius: '4px',
                    }),
                  }}
                  {...field}
                  options={memberOptions}
                  placeholder="Select a member..."
                  isClearable
                  value={
                    memberOptions.find(
                      (option) => option.value === field.value,
                    ) || null
                  }
                  onChange={(option) => field.onChange(option?.value || null)}
                />
              )}
            />
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-start gap-4 mt-8">
          <div className="w-full md:w-auto">
            <Button disabled={loading}>{loading ? <Spinner /> : 'Create Epic'}</Button>
          </div>
          <button
            type="button"
            onClick={() => navigate(`/project/${projectId}/epics`)}
            className="text-[#4F5F7B] text-body-md font-semibold leading-5 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
