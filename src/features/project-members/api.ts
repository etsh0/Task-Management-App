import config from '../../config/env';
import { getAccessToken } from '../auth/Login/cookie';
import type { AcceptInvitationPayload, InviteMemberPayload } from './type';

export const getProjectMembers = async (projectId: string) => {
  const token = getAccessToken();
  const res = await fetch(
    config.apiUrl + `/rest/v1/get_project_members?project_id=eq.${projectId}`,
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
    throw new Error('Failed to fetch project members');
  }
  const data = await res.json();
  return data;
};

export const inviteMember = async (payload: InviteMemberPayload) => {
  const token = getAccessToken();
  if (!token) {
    throw new Error(
      JSON.stringify({
        status: 401,
        message: 'Unauthorized',
      }),
    );
  }
  const res = await fetch(config.apiUrl + `/rest/v1/rpc/invite_member`, {
    method: 'POST',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();

    throw new Error(
      JSON.stringify({
        status: res.status,
        message: error,
      }),
    );
  }
  return true;
};

export const acceptInvitation = async (payload: AcceptInvitationPayload) => {
  const token = getAccessToken();
  if (!token) {
    throw new Error(
      JSON.stringify({
        status: 401,
        message: 'Unauthorized',
      }),
    );
  }
  const res = await fetch(config.apiUrl + `/rest/v1/rpc/accept_invitation`, {
    method: 'POST',
    headers: {
      apiKey: config.anonKey,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(
      JSON.stringify({
        status: res.status,
        message: errorText,
      }),
    );
  }

  return true;
};
