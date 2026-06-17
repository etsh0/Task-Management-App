import { useEffect, useState } from 'react';
import { getEpicDetails } from '../api';
import type { ProjectEpic } from '../type';

export const useEpicDetails = (projectId: string, epicId: string) => {
  const [epic, setEpic] = useState<ProjectEpic | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!projectId || !epicId) return;
    const fetchEpic = async () => {
      try {
        setLoading(true);
        const data = await getEpicDetails(projectId, epicId);
        setEpic(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpic();
  }, [projectId, epicId]);

  return {
    epic,
    loading,
  };
};
