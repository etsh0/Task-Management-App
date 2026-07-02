import Select from 'react-select';
import ArrowLeft2 from '../../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../../assets/icons/ArrowRight2';
import { useState } from 'react';
import { DayPicker, type DateRange } from '@daypicker/react';
import Button from '../../../shared/components/Button';
import { countDays, MAX_RANGE_DAYS } from '../../../shared/constants/DayPicker';
import type { StatisticsHeaderProps, StatusOption } from '../type';
import { formatDate } from '../../../shared/utils/formatDate';
import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { TASK_STATUS_OPTIONS } from '../../tasks/type';

export default function StatisticsHeader({
  draftRange,
  onDraftRangeChange,
  dateError,
  onDateErrorChange,
  onApplyRange,
  appliedRange,
  onProjectChange,
  selectedProjectId,
  onStatusChange,
  selectedStatus,
}: StatisticsHeaderProps) {
  const [open, setOpen] = useState(false);
  const { projects } = useSelector((state: RootState) => state.projects);

  const projectOptions = [
    { value: '', label: 'All Projects' },
    ...projects.map((project) => ({
      value: project.id,
      label: project.name,
    })),
  ];

  const statusOptions: StatusOption[] = [
    { value: '', label: 'All Statuses' },
    ...TASK_STATUS_OPTIONS,
  ];

  const handleApply = () => {
    if (!draftRange.from || !draftRange.to) {
      onDateErrorChange('Date range is required');
      return;
    }

    const selectedDays = countDays(draftRange.from, draftRange.to);

    if (selectedDays > MAX_RANGE_DAYS) {
      onDateErrorChange('Date range cannot exceed 7 days');
      return;
    }

    onApplyRange(draftRange);
    onDateErrorChange('');
    setOpen(false);
  };

  const handleCancel = () => {
    onDraftRangeChange(appliedRange);
    onDateErrorChange('');
    setOpen(false);
  };

  const handleSelectRange = (nextRange: DateRange | undefined) => {
    if (!nextRange) return;

    onDateErrorChange('');
    onDraftRangeChange(nextRange);
  };

  return (
    <>
      <header className="flex flex-col mb-10 gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Weekly Planner
          </h2>
          <p className="text-[16px] leading-6 text-neutral">
            Manage your deadlines and track team velocity.
          </p>
        </div>
        <div className="p-4 bg-surface-low rounded-lg flex items-center justify-between w-full">
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <ArrowLeft2 />
              <div className="text-label-sm text-slate-one font-bold leading-5">
                {appliedRange.from && appliedRange.to
                  ? `${formatDate(appliedRange.from)} - ${formatDate(appliedRange.to)}`
                  : 'Select date range'}
              </div>
              <ArrowRight2 />
            </div>
            {open && (
              <div className="absolute z-100 -left-4 top-8 bg-white/70 rounded-lg p-5 border border-border backdrop-blur-[20px]">
                <DayPicker
                  mode="range"
                  required
                  selected={draftRange}
                  onSelect={handleSelectRange}
                  showOutsideDays
                  classNames={{
                    day: 'text-[12px] font-semibold',
                    selected:
                      '[&_button]:rounded-lg [&_button]:bg-primary/20 [&_button]:text-primary',
                    range_start: 'bg-[#0052CC33] text-primary ',
                    range_middle: 'bg-[#0052CC33] text-primary ',
                    range_end: 'bg-[#0052CC33] text-primary ',
                  }}
                />
                {dateError && (
                  <p className="mt-2 text-body-md font-medium text-error">
                    {dateError}
                  </p>
                )}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-[12px] text-neutral w-full font-medium leading-4 rounded-lg md:rounded-xs py-2.5 px-6  cursor-pointer"
                  >
                    Cancel
                  </button>
                  <div onClick={handleApply} className="w-full">
                    <Button>Apply Range</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <Select
                value={
                  projectOptions.find(
                    (option) => option.value === selectedProjectId,
                  ) ?? projectOptions[0]
                }
                onChange={(option) => {
                  onProjectChange(option?.value || null);
                }}
                options={projectOptions}
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '8px 16px',
                    borderRadius: '2px',
                  }),
                }}
              />
            </div>
            <div className="">
              <Select
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={statusOptions}
                value={
                  statusOptions.find(
                    (option) => option.value === selectedStatus,
                  ) ?? statusOptions[0]
                }
                onChange={(option) => {
                  onStatusChange(option?.value || null);
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '8px 16px',
                    borderRadius: '2px',
                  }),
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
