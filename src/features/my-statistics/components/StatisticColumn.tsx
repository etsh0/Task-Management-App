import NoTasksIcon from '../../../assets/icons/NoTasksIcon';
import { formatColumnDate } from '../../../shared/constants/DayPicker';
import { STATUS_CONFIG } from '../../../shared/constants/statusConfig';
import { TASK_STATUS_OPTIONS } from '../../tasks/type';
import type { DailyTaskStats } from '../type';

export default function StatisticColumn({ day, statuses }: DailyTaskStats) {
  const { weekday, dateLabel } = formatColumnDate(day);
  const visibleStatuses = TASK_STATUS_OPTIONS.filter(
    (status) => statuses[status.value],
  );

  function isSameDay(day: string) {
    const columnDate = new Date(`${day}T00:00:00`);
    const today = new Date();

    columnDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return columnDate.getTime() === today.getTime();
  }

  const isToday = isSameDay(day);
  return (
    <>
      <div
        className={`relative flex min-h-20.5 items-center gap-4 rounded-lg bg-white p-4 shadow-[0px_1px_2px_0px_#0000000D] md:block md:h-105 ${
          isToday ? 'border-2 border-primary' : ''
        }`}
      >
        {isToday && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase leading-3 text-white">
            Today
          </span>
        )}
        <div className="header flex w-20 shrink-0 flex-col border-r border-border pr-4 md:w-auto md:border-r-0 md:pb-4 md:pr-0">
          <span
            className={`text-[12px] ${visibleStatuses.length === 0 && 'text-neutral/30'} text-neutral font-bold uppercase leading-4`}
          >
            {weekday}
          </span>
          <h5
            className={`text-title-md leading-7 ${visibleStatuses.length === 0 ? 'text-neutral/30' : 'text-slate-one'} font-bold  capitalize`}
          >
            {dateLabel}
          </h5>
        </div>
        <div className="flex flex-row md:flex-col gap-2">
          {visibleStatuses.length > 0 ? (
            visibleStatuses.map((status) => (
              <div
                key={status.value}
                className={`row-tasks rounded-xs p-2 ${STATUS_CONFIG[status.value].badgeColor} flex items-center justify-between`}
              >
                <span
                  className={`hidden md:block text-label-sm font-bold uppercase ${STATUS_CONFIG[status.value].badgeColor} leading-[11.5px]`}
                >
                  {status.label}
                </span>
                <span className="text-[12px] text-slate-one font-bold leading-4">
                  {statuses[status.value]}
                </span>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-3 items-center ml-15 md:ml-0 md:mt-30 h-full">
              <div className="text-neutral/30">
                <NoTasksIcon />
              </div>
              <p className="text-[10px] text-neutral/30 uppercase font-bold leading-3.75">
                No Tasks
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
