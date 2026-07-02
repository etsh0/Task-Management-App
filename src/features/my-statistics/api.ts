import config from '../../config/env';
import { getAccessToken } from '../auth/Login/cookie';
import type { TasksCalendarStatsPayload } from './type';

export const getTasksCalendarStats = async (
  payload: TasksCalendarStatsPayload,
) => {
  const token = getAccessToken();
  const res = await fetch(
    config.apiUrl + '/rest/v1/rpc/get_tasks_calendar_stats',
    {
      method: 'POST',
      headers: {
        apiKey: config.anonKey,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch calendar statistics');
  }

  const data = await res.json();
  // console.log(data);

  return data;
};
