import type { DateRange } from '@daypicker/react';

export type StatisticsHeaderProps = {
  appliedRange: DateRange;
  draftRange: DateRange;

  onDraftRangeChange: (range: DateRange) => void;
  onApplyRange: (range: DateRange) => void;

  dateError: string;
  onDateErrorChange: (message: string) => void;

  selectedProjectId: string | null;
  onProjectChange: (projectId: string | null) => void;

  selectedStatus: string | null;
  onStatusChange: (status: string | null) => void;
};
