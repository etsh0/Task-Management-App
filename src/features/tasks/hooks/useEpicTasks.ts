import { useEffect, useState } from 'react';
import type { EpicTask } from '../type';
import { getEpicTasks } from '../api';

export const useEpicTasks = (epicId: string) => {
  const [tasks, setTasks] = useState<EpicTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!epicId) return;

    const fetchTasks = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getEpicTasks(epicId);
        setTasks(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [epicId]);

  return {
    tasks,
    loading,
    error,
  };
};
