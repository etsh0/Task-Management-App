import config from '../../config/env';
import type { PaginationParams } from '../../shared/types/PaginationParams';
import { getAccessToken } from '../auth/Login/cookie';
import type { newEpicPayload } from './type';

const token = getAccessToken();

export const getProjectEpics = async ({
  projectId,
  LIMIT,
  OFFSET,
}: PaginationParams) => {
  const res = await fetch(
    config.apiUrl +
      `/rest/v1/project_epics?project_id=eq.${projectId}&limit=${LIMIT}&offset=${OFFSET}`,
    {
      method: 'GET',
      headers: {
        apiKey: config.anonKey,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Prefer: 'count=exact',
      },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch project members');
  }

  const totalCount = res.headers.get('Content-Range')?.split('/')[1];
  const data = await res.json();

  return {
    data,
    totalCount: Number(totalCount),
  };
};

export const addNewEpic = async (payload: newEpicPayload) => {
  const res = await fetch(config.apiUrl + '/rest/v1/epics', {
    method: 'POST',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to create epic');
  }

  return data;
};

export const getEpicDetails = async (projectID: string, epicId: string) => {
  const res = await fetch(
    config.apiUrl +
      `/rest/v1/project_epics?project_id=eq.${projectID}&id=eq.${epicId}`,
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
    throw new Error('Failed to fetch epic details');
  }

  const data = await res.json();
  return data[0];
};
