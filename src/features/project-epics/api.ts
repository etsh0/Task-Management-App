import config from '../../config/env';
import { getAccessToken } from '../auth/Login/cookie';

export const getProjectEpics = async (projectId: string) => {
  const token = getAccessToken();
  const res = await fetch(
    config.apiUrl + `/rest/v1/project_epics?project_id=eq.${projectId}`,
    {
      method: 'GET',
      headers: {
        apiKey: config.anonKey,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch project members');
  }
  const data = await res.json();
  return data;
};
