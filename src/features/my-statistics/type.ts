import type { DateRange } from '@daypicker/react';

export type StatisticsHeaderProps = {
  appliedRange: DateRange;
  draftRange: DateRange;

  onDraftRangeChange: (range: DateRange) => void;
  onApplyRange: (range: DateRange) => void;

  dateError: string;
  onDateErrorChange: (message: string) => void;
};
