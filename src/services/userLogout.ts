import config from '../config/env';
import {
  clearAuthCookies,
  getAccessToken,
} from '../features/auth/Login/cookie';

export const logOut = async () => {
  const token = getAccessToken();

  await fetch(config.apiUrl + '/auth/v1/logout', {
    method: 'POST',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
    },
  });

  clearAuthCookies();
};
