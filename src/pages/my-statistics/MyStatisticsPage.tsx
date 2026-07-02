import type { DateRange } from '@daypicker/react';
import CheckIcon from '../../assets/icons/CheckIcon';
import OverdueIcon from '../../assets/icons/OverdueIcon';
import TotalIcon from '../../assets/icons/TotalIcon';
import StatisticCard from '../../features/my-statistics/components/StatisticCard';
import StatisticColumn from '../../features/my-statistics/components/StatisticColumn';
import StatisticsHeader from '../../features/my-statistics/components/StatisticsHeader';
import { useEffect, useState } from 'react';
import { addDays, getWeekStart } from '../../shared/constants/DayPicker';
import type { AppDispatch } from '../../store/store';
import { getAllProjects } from '../../store/slices/ProjectsSlice';
import { useDispatch } from 'react-redux';
import { toApiDate } from '../../shared/utils/formatDate';
import { useTasksCalendarStats } from '../../features/my-statistics/hooks/useTasksCalendarStats';
import type { TaskStatus } from '../../features/tasks/type';

export default function MyStatisticsPage() {
  const currentWeekStart = getWeekStart(new Date());
  const initialRange: DateRange = {
    from: currentWeekStart,
    to: addDays(currentWeekStart, 6),
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProjects({ LIMIT: 100, OFFSET: 0 }));
  }, [dispatch]);

  const [appliedRange, setAppliedRange] = useState(initialRange);
  const [draftRange, setDraftRange] = useState(initialRange);
  const [dateError, setDateError] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | null>(null);

  const statsPayload =
    appliedRange.from && appliedRange.to
      ? {
          p_start_date: toApiDate(appliedRange.from),
          p_end_date: toApiDate(appliedRange.to),
          p_project_id: selectedProjectId,
          p_status: selectedStatus,
        }
      : null;

  const { data } = useTasksCalendarStats(statsPayload);

  return (
    <>
      <section className="px-8 pt-8 pb-20 md:pb-[121.5px]">
        <StatisticsHeader
          appliedRange={appliedRange}
          draftRange={draftRange}
          onDraftRangeChange={setDraftRange}
          onApplyRange={setAppliedRange}
          dateError={dateError}
          onDateErrorChange={setDateError}
          selectedProjectId={selectedProjectId}
          onProjectChange={setSelectedProjectId}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
        <div className="grid grid-cols-3 gap-6 my-8">
          <StatisticCard
            title="Tasks"
            count={data?.total_tasks ?? 0}
            icon={<TotalIcon />}
            bg="#0052CC1A"
          />
          <StatisticCard
            title="COMPLETED TASKS"
            count={data?.done_tasks ?? 0}
            icon={<CheckIcon className="w-5 h-5" />}
            bg="#0068441A"
          />
          <StatisticCard
            title="OVERDUE TASKS"
            count={data?.overdue_tasks ?? 0}
            icon={<OverdueIcon />}
            bg="#FFDAD633"
            isOverdue={true}
          />
        </div>
        <div className="grid grid-cols-7 gap-3">
          {data?.daily.map((dayStats) => (
            <StatisticColumn
              key={dayStats.day}
              day={dayStats.day}
              statuses={dayStats.statuses}
            />
          ))}
        </div>
        <div className="flex items-center gap-8 justify-between py-8">
          <div className="p-8 rounded-lg bg-white w-[50%]">
            <h6 className="text-title-md text-slate-one font-bold leading-7">
              All Projects
            </h6>
            <div className="flex flex-col gap-4 mt-10 ">
              {/* project */}
              <div className="flex items-center justify-between">
                <span className="text-neutral text-[12px] font-bold leading-4">
                  Skyline Residency
                </span>
                <span className="text-slate-one text-[12px] font-bold leading-4">
                  45 Tasks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
