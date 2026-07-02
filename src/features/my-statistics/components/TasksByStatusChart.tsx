import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { TASK_STATUS_OPTIONS, type TaskStatus } from '../../tasks/type';

ChartJS.register(ArcElement, Tooltip, Legend);

type TasksByStatusChartProps = {
  totals: Partial<Record<TaskStatus, number>>;
  totalTasks: number;
};

const STATUS_COLORS: Record<TaskStatus, string> = {
  TO_DO: '#94A3B8',
  IN_PROGRESS: '#003D9B',
  BLOCKED: '#BA1A1A',
  IN_REVIEW: '#475569',
  READY_FOR_QA: '#FEE6D5',
  REOPENED: '#EA580C',
  READY_FOR_PRODUCTION: '#0D9488',
  DONE: '#004E32',
};

export default function TasksByStatusChart({
  totals,
  totalTasks,
}: TasksByStatusChartProps) {
  const chartItems = TASK_STATUS_OPTIONS.map((status) => ({
    ...status,
    count: totals[status.value] ?? 0,
    color: STATUS_COLORS[status.value],
  })).filter((status) => status.count > 0);

  const chartData = {
    labels: chartItems.map((item) => item.label),
    datasets: [
      {
        data: chartItems.map((item) => item.count),
        backgroundColor: chartItems.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-[0px_1px_2px_0px_#0000000D]">
      <h3 className="text-title-md text-slate-one font-bold leading-7">
        Tasks by Status
      </h3>
      {chartItems.length === 0 ? (
        <p className="text-body-md text-neutral">No tasks found</p>
      ) : (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 mt-10">
          <div className="relative h-48">
            <Doughnut data={chartData} options={options} />

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center gap-1 justify-center">
              <span className="text-[30px] font-extrabold leading-6 text-slate-one">
                {totalTasks}
              </span>
              <span className="text-[10px] font-bold uppercase text-neutral/50 leading-3.75">
                Total
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {chartItems.map((item) => {
              const percent = totalTasks
                ? Math.round((item.count / totalTasks) * 100)
                : 0;

              return (
                <div key={item.value} className="flex items-center gap-4">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[12px] leading-4 font-bold text-slate-one/70">
                        {item.label}
                      </span>
                      <span className="text-[12px] leading-4 font-bold text-slate-one/70">
                        {item.count}
                      </span>
                    </div>

                    <div className="h-1 rounded-xl bg-surface-low">
                      <div
                        className="h-1 rounded-xl"
                        style={{
                          width: `${percent}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
