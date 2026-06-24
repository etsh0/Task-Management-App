import { useEffect, useState } from 'react';
import { getTaskDetails } from '../api';
import type { EpicTask } from '../type';

export const useTaskDetails = (projectId: string, taskId: string | null) => {
  const [task, setTask] = useState<EpicTask | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!taskId) return;

    const fetchTaskDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getTaskDetails(projectId, taskId);
        setTask(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskDetails();
  }, [projectId, taskId]);

  return { task, loading, error };
};
