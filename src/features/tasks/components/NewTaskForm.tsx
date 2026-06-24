import { useState } from 'react';
import Button from '../../../shared/components/Button';
import Spinner from '../../../shared/components/Spinner';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import {
  TASK_STATUS_OPTIONS,
  type newTaskPayload,
  type TaskStatus,
} from '../type';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from 'react-select';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useProjectMembers } from '../../project-members/hooks/useProjectMembers';
import { useEpics } from '../../project-epics/hooks/useEpics';
import { addNewTask } from '../api';
import { toast } from 'react-toastify';

const taskStatusValues = TASK_STATUS_OPTIONS.map((status) => status.value) as [
  TaskStatus,
  ...TaskStatus[],
];

const newTaskSchema = z.object({
  title: z.string().min(1, 'Task title is required'),
  epic_id: z.string().nullable().optional(),
  description: z.string().optional(),
  assignee_id: z.string().nullable().optional(),
  status: z.enum(taskStatusValues).nullable().optional(),
  due_date: z
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
        message: 'Due Date must be today or in the future',
      },
    ),
});

type FormInputs = z.infer<typeof newTaskSchema>;

export default function NewTaskForm() {
  const location = useLocation();
  const epicIdFromState = location.state?.epicId ?? null;
  const defaultStatus = (location.state?.status as TaskStatus) ?? 'TO_DO';

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { members } = useProjectMembers(projectId);
  const { epics } = useEpics(projectId);

  const memberOptions = members.map((member) => ({
    value: member.user_id,
    label: member.metadata.name,
  }));

  const epicOptions = epics.map((epic) => ({
    value: epic.id,
    label: `${epic.epic_id} ${
      epic.title.length > 100 ? epic.title.slice(0, 100) + '...' : epic.title
    }`,
  }));

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      status: defaultStatus,
      epic_id: epicIdFromState,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!projectId) return;
    console.log(data);
    const payload: newTaskPayload = {
      project_id: projectId,
      title: data.title,
      status: data.status || 'TO_DO',
      due_date: data.due_date || null,
      epic_id: data.epic_id ?? null,
      description: data.description ?? null,
      assignee_id: data.assignee_id ?? null,
    };
    try {
      setLoading(true);
      await addNewTask(payload);
      reset();
      navigate(`/project/${projectId}/tasks`);
      toast.success('Task Created successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:p-6 rounded-lg md:bg-white flex flex-col gap-8 pb-10"
      >
        <label className="label" htmlFor="">
          Title
          <input
            type="text"
            className={`input ${errors.title && 'input-error'}`}
            placeholder="e.g., Finalize structural schematics"
            {...register('title')}
          />
          {errors.title && (
            <span className="text-error">{errors.title.message}</span>
          )}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <label className="label" htmlFor="">
            status
            <Controller
              name="status"
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
                  onBlur={field.onBlur}
                  options={TASK_STATUS_OPTIONS}
                  placeholder="Select Status"
                  isClearable={false}
                  value={
                    TASK_STATUS_OPTIONS.find(
                      (option) => option.value === field.value,
                    ) || null
                  }
                  onChange={(option) => field.onChange(option?.value ?? null)}
                />
              )}
            />
          </label>
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
                  onBlur={field.onBlur}
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
        </div>
        <label className="label" htmlFor="">
          Epic
          <Controller
            name="epic_id"
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
                onBlur={field.onBlur}
                options={epicOptions}
                placeholder="Select a epic..."
                isClearable
                value={
                  epicOptions.find((option) => option.value === field.value) ||
                  null
                }
                onChange={(option) => field.onChange(option?.value || null)}
              />
            )}
          />
        </label>
        <label className="label" htmlFor="">
          Due Date
          <input
            className={`input ${errors.due_date && 'input-error'}`}
            type="date"
            id=""
            {...register('due_date')}
          />
          {errors.due_date && (
            <span className="text-error">{errors.due_date.message}</span>
          )}
        </label>
        <label className="label" htmlFor="">
          Description
          <textarea
            {...register('description')}
            id=""
            className="input h-36 resize-none"
          ></textarea>
        </label>
        <div className="flex flex-col md:flex-row-reverse items-center justify-start gap-4 mt-8">
          <div className="w-full md:w-auto">
            <Button disabled={loading}>
              {loading ? <Spinner /> : 'Create Task'}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => navigate(`/project/${projectId}/tasks`)}
            className="text-[#4F5F7B] text-body-md font-semibold leading-5 py-3 px-6 cursor-pointer"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
