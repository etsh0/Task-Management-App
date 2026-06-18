export type TaskStatus =
  | 'TO_DO'
  | 'IN_PROGRESS'
  | 'BLOCKED'
  | 'IN_REVIEW'
  | 'READY_FOR_QA'
  | 'REOPENED'
  | 'READY_FOR_PRODUCTION'
  | 'DONE';

export const TASK_STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'TO_DO', label: 'To Do' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'BLOCKED', label: 'Blocked' },
  { value: 'IN_REVIEW', label: 'In Review' },
  { value: 'READY_FOR_QA', label: 'Ready For QA' },
  { value: 'REOPENED', label: 'Reopened' },
  { value: 'READY_FOR_PRODUCTION', label: 'Ready For Production' },
  { value: 'DONE', label: 'Done' },
];

export type newTaskPayload = {
  project_id: string;
  epic_id?: string | null;
  title: string;
  description?: string | null;
  assignee_id?: string | null;
  due_date?: string | null;
  status: TaskStatus;
};
