import { useEffect, useState } from 'react';
import { getAllTasks } from '../api';
import { useParams } from 'react-router-dom';

export const useAllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { projectId } = useParams();
  useEffect(() => {
    const fetchTasks = async () => {
      if (!projectId) return;
      setLoading(true);
      setError(false);
      try {
        const data = await getAllTasks(projectId);
        setTasks(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [projectId]);

  return {
    tasks,
    loading,
    error,
  };
};
