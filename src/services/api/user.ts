import config from '../../config/env';
import { getAccessToken } from '../../features/auth/Login/cookie';

export const getUserData = async () => {
  const token = getAccessToken();

  const res = await fetch(config.apiUrl + '/auth/v1/user', {
    method: 'GET',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};
