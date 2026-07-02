import { useEffect, useState } from 'react';
import type {
  TasksCalendarStatsPayload,
  TasksCalendarStatsResponse,
} from '../type';
import { getTasksCalendarStats } from '../api';

export const useTasksCalendarStats = (
  payload: TasksCalendarStatsPayload | null,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TasksCalendarStatsResponse | null>(null);

  useEffect(() => {
    if (!payload) return;
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getTasksCalendarStats(payload);
        setData(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [payload]);

  return {
    data,
    loading,
    error,
  };
};
