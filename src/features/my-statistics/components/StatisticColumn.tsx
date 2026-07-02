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
  return (
    <>
      <div className="h-105 overflow-y-auto p-4 rounded-lg bg-white shadow-[0px_1px_2px_0px_#0000000D] ">
        <div className="header pb-4">
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
        <div className="flex flex-col gap-2">
          {visibleStatuses.length > 0 ? (
            visibleStatuses.map((status) => (
              <div
                key={status.value}
                className={`row-tasks rounded-xs p-2 ${STATUS_CONFIG[status.value].badgeColor} flex items-center justify-between`}
              >
                <span
                  className={`text-label-sm font-bold uppercase ${STATUS_CONFIG[status.value].badgeColor} leading-[11.5px]`}
                >
                  {status.label}
                </span>
                <span className="text-[12px] text-slate-one font-bold leading-4">
                  {statuses[status.value]}
                </span>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-3 items-center mt-30 h-full">
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
