import config from '../../../config/env';
import { SaveAuthCookies } from '../Login/cookie';
import type { CookiesTypes } from '../Login/type';
import type { SignupPayload } from './type';

export const handleSignUp = async (payload: SignupPayload) => {
  const res = await fetch(config.apiUrl + '/auth/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: config.anonKey,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  const tokens:CookiesTypes = {
    accessToken:data.access_token,
    refreshToken:data.refresh_token
  }
  SaveAuthCookies(tokens)

  if (!res.ok) {
    throw new Error(data.msg || 'Sign up faild');
  }
};
