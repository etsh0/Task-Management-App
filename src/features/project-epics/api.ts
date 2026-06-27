import config from '../../config/env';
import type { PaginationParams } from '../../shared/types/PaginationParams';
import { getAccessToken } from '../auth/Login/cookie';
import type { newEpicPayload, UpdateEpicPayload } from './type';

export const getProjectEpics = async ({
  projectId,
  LIMIT,
  OFFSET,
  SEARCH_TERM,
}: PaginationParams & { SEARCH_TERM?: string }) => {
  const token = getAccessToken();
  let url =
    config.apiUrl +
    `/rest/v1/project_epics?project_id=eq.${projectId}&limit=${LIMIT}&offset=${OFFSET}`;

  if (SEARCH_TERM) {
    url += `&title=ilike.%25${SEARCH_TERM}%25`;
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Prefer: 'count=exact',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to Search epics');
  }

  const totalCount = res.headers.get('Content-Range')?.split('/')[1];
  const data = await res.json();

  return {
    data,
    totalCount: Number(totalCount),
  };
};

export const addNewEpic = async (payload: newEpicPayload) => {
  const token = getAccessToken();
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
  const token = getAccessToken();
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

export const updateEpic = async (
  epicId: string,
  payload: UpdateEpicPayload,
) => {
  const token = getAccessToken();
  const res = await fetch(config.apiUrl + `/rest/v1/epics?id=eq.${epicId}`, {
    method: 'PATCH',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to update epic');
  }
};
