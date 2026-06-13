import { useEffect, useState } from 'react';
import type { ProjectMember } from '../type';
import { getProjectMembers } from '../api';

export function useProjectMembers(projectId?: string) {
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      if (!projectId) return;

      try {
        setLoading(true);
        setError(null);

        const data = await getProjectMembers(projectId);

        setMembers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [projectId]);

  return {
    members,
    error,
    loading,
  };
}
