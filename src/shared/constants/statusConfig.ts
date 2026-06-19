import type { TaskStatus } from '../../features/tasks/type';

export const STATUS_CONFIG: Record<
  TaskStatus,
  { label: string; dotColor: string; badgeColor: string }
> = {
  TO_DO: {
    label: 'To Do',
    dotColor: 'bg-[#94A3B8]',
    badgeColor: 'bg-[#E7EBF3] text-[#64748B]',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    dotColor: 'bg-[#2563EB]',
    badgeColor: 'bg-[#DCE6FF] text-[#2563EB]',
  },
  BLOCKED: {
    label: 'Blocked',
    dotColor: 'bg-[#DC2626]',
    badgeColor: 'bg-[#FDE2E2] text-[#DC2626]',
  },
  IN_REVIEW: {
    label: 'In Review',
    dotColor: 'bg-[#475569]',
    badgeColor: 'bg-[#E7EBF3] text-[#51617E]',
  },
  READY_FOR_QA: {
    label: 'Ready For QA',
    dotColor: 'bg-[#9333EA]',
    badgeColor: 'bg-[#F1E4FB] text-[#9333EA]',
  },
  REOPENED: {
    label: 'Reopened',
    dotColor: 'bg-[#EA580C]',
    badgeColor: 'bg-[#FEE6D5] text-[#EA580C]',
  },
  READY_FOR_PRODUCTION: {
    label: 'Ready For Production',
    dotColor: 'bg-[#0D9488]',
    badgeColor: 'bg-[#D8F3F0] text-[#0D9488]',
  },
  DONE: {
    label: 'Done',
    dotColor: 'bg-[#16A34A]',
    badgeColor: 'bg-[#DDF4E4] text-[#16A34A]',
  },
};
