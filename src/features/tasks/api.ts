import config from '../../config/env';
import { getAccessToken } from '../auth/Login/cookie';
import type { newTaskPayload, TaskStatus } from './type';

export const addNewTask = async (payload: newTaskPayload) => {
  const token = getAccessToken();
  const res = await fetch(config.apiUrl + '/rest/v1/tasks', {
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
    throw new Error(data.message || 'Failed to create task');
  }
  return data;
};

export const getEpicTasks = async (epicId: string) => {
  const token = getAccessToken();
  const res = await fetch(
    config.apiUrl + `/rest/v1/project_tasks?epic_id=eq.${epicId}`,
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
    throw new Error('Failed to fetch epic tasks');
  }

  const data = await res.json();
  return data;
};

export const getTasksByStatus = async (
  projectId: string,
  status: TaskStatus,
) => {
  const token = getAccessToken();
  const res = await fetch(
    config.apiUrl +
      `/rest/v1/project_tasks?project_id=eq.${projectId}&status=eq.${status}`,
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
    throw new Error('Failed to fetch tasks');
  }
  return res.json();
};
