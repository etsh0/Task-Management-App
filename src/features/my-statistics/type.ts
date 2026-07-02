import type { DateRange } from '@daypicker/react';
import type { TaskStatus } from '../tasks/type';

export type StatusOption = {
  value: TaskStatus | '';
  label: string;
};

export type StatisticsHeaderProps = {
  appliedRange: DateRange;
  draftRange: DateRange;

  onDraftRangeChange: (range: DateRange) => void;
  onApplyRange: (range: DateRange) => void;

  dateError: string;
  onDateErrorChange: (message: string) => void;

  selectedProjectId: string | null;
  onProjectChange: (projectId: string | null) => void;

  selectedStatus: TaskStatus | null;
  onStatusChange: (status: TaskStatus | null) => void;
};

export type TasksCalendarStatsPayload = {
  p_start_date: string;
  p_end_date: string;
  p_project_id: string | null;
  p_status: TaskStatus | null;
};
export type DailyTaskStats = {
  day: string;
  statuses: Partial<Record<TaskStatus, number>>;
};

export type TasksCalendarStatsResponse = {
  daily: DailyTaskStats[];
  totals: Partial<Record<TaskStatus, number>>;
  total_tasks: number;
  done_tasks: number;
  overdue_tasks: number;
};

export type TasksCountPerProjectPayload = {
  p_start_date: string;
  p_end_date: string;
};

export type TasksCountPerProject = {
  project_id: string;
  project_name: string;
  tasks_count: number;
};

export type TasksCountPerProjectResponse = TasksCountPerProject[];
