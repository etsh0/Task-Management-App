import { useEffect, useState } from 'react';
import { getTasksCountPerProject } from '../api';
import type {
  TasksCountPerProjectPayload,
  TasksCountPerProjectResponse,
} from '../type';

export const useTasksPerProject = (
  payload: TasksCountPerProjectPayload | null,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<TasksCountPerProjectResponse>([]);
  useEffect(() => {
    if (!payload) return;

    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getTasksCountPerProject(payload);
        setTasks(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [payload]);

  return {
    tasks,
    loading,
    error,
  };
};
