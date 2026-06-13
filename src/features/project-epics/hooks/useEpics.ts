import { useEffect, useState } from 'react';

import { getProjectEpics } from '../api';
import type { ProjectEpic } from '../type';

export function useEpics(projectId?: string) {
  const [epics, setEpics] = useState<ProjectEpic[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEpics = async () => {
      if (!projectId) return;

      try {
        setLoading(true);
        setError(null);

        const data = await getProjectEpics(projectId);

        setEpics(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpics();
  }, [projectId]);

  return {
    epics,
    error,
    loading,
  };
}
