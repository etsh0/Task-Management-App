export type ProjectMember = {
  member_id: string;
  metadata: {
    name: string;
  };
  email: string;
  role: string;
  user_id?: string;
};

export type InviteMemberPayload = {
  p_email: string;
  p_project_id: string;
  p_app_url: string;
  p_base_url: string;
};

export type AcceptInvitationPayload = {
  p_token: string;
};
