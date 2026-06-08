import config from '../../../config/env';
import { SaveAuthCookies } from './cookie';
import type { CookiesTypes, SigninPayload } from './type';

export const handleSignin = async (payload: SigninPayload) => {
  const res = await fetch(
    config.apiUrl + '/auth/v1/token?grant_type=password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.anonKey,
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json();

  const tokens: CookiesTypes = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    rememberMe: payload.rememberMe,
  };
  SaveAuthCookies(tokens);

  if (!res.ok) {
    throw new Error(data.msg || 'Log In Faild');
  }

  return data;
};
