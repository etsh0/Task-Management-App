export type newEpicPayload = {
  title: string;
  description?: string | null;
  assignee_id?: string | null;
  deadline?: string | null;
  project_id: string;
};

export type EpicUser = {
  sub: string;
  name: string;
  email: string;
  department: string;
};

export type ProjectEpic = {
  id: string;
  epic_id: string;
  title: string;
  description: string | null;
  deadline: string | null;
  created_at: string;
  created_by: EpicUser;
  assignee: EpicUser | null;
};

export type UpdateEpicPayload = {
  title?: string;
  description?: string | null;
  assignee_id?: string | null;
  deadline?: string | null;
};
