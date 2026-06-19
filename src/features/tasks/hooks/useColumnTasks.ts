import { useEffect, useState } from 'react';
import { getTasksByStatus } from '../api';
import type { EpicTask, TaskStatus } from '../type';

export const useColumnTasks = (projectId: string, status: TaskStatus) => {
  const [tasks, setTasks] = useState<EpicTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!projectId) return;

    const fetchTasks = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getTasksByStatus(projectId, status);
        setTasks(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId, status]);

  return { tasks, loading, error };
};
