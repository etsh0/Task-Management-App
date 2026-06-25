import { useEffect, useState } from 'react';
import { getAllTasks } from '../api';
import { useParams } from 'react-router-dom';
import { PAGINATION_LIMIT } from '../../../shared/constants/pagination';

export const useAllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { projectId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const offset = (currentPage - 1) * PAGINATION_LIMIT;
  const totalPages = totalCount ? Math.ceil(totalCount / PAGINATION_LIMIT) : 0;

  useEffect(() => {
    const fetchTasks = async () => {
      if (!projectId) return;
      setLoading(true);
      setError(false);
      try {
        const data = await getAllTasks({
          projectId,
          LIMIT: PAGINATION_LIMIT,
          OFFSET: offset,
        });
        setTasks(data.data);
        setTotalCount(data.totalCount);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [projectId, offset]);

  return {
    tasks,
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount,
  };
};
