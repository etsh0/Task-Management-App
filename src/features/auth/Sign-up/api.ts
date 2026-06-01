import config from '../../../config/env';
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

  if (!res.ok) {
    throw new Error(data.msg || 'Sign up faild');
  }
};
