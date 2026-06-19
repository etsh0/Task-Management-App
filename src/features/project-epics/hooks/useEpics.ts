import { useEffect, useState } from 'react';

import { getProjectEpics } from '../api';
import type { ProjectEpic } from '../type';
import { PAGINATION_LIMIT } from '../../../shared/constants/pagination';

export function useEpics(projectId?: string) {
  const [epics, setEpics] = useState<ProjectEpic[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const offset = (currentPage - 1) * PAGINATION_LIMIT;

  const totalPages = totalCount ? Math.ceil(totalCount / PAGINATION_LIMIT) : 0;

  useEffect(() => {
    const fetchEpics = async () => {
      if (!projectId) return;

      try {
        setLoading(true);
        setError(null);

        const data = await getProjectEpics({
          projectId,
          LIMIT: PAGINATION_LIMIT,
          OFFSET: offset,
        });

        setEpics(data.data);
        // console.log(data.data);

        setTotalCount(data.totalCount);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpics();
  }, [projectId, offset]);

  return {
    epics,
    setEpics,
    error,
    loading,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount,
  };
}
