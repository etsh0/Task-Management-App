import config from '../../../config/env';

export const updatePassword = async (
  password: string,
  access_token: string,
) => {
  const res = await fetch(config.apiUrl + '/auth/v1/user', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${access_token}`,
      apiKey: config.anonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });

  return await res.json();
};
