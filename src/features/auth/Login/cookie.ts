import Cookies from 'js-cookie';
import type { CookiesTypes } from './type';

export const SaveAuthCookies = ({
  accessToken,
  refreshToken,
  rememberMe,
}: CookiesTypes) => {
  const options = rememberMe ? { expires: 30 } : undefined;

  Cookies.set('access_token', accessToken, options);
  Cookies.set('refresh_token', refreshToken, options);
};

export const clearAuthCookies = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export const getAccessToken = () => {
  return Cookies.get('access_token');
};
export const getRefreshToken = () => {
  return Cookies.get('refresh_token');
};
