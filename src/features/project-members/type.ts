export type ProjectMember = {
  member_id: string;
  metadata: {
    name: string;
  };
  email: string;
  role: string;
  user_id? : string
};
