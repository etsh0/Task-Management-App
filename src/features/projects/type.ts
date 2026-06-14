export type Project = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

export type HeaderProps = {
  title: string;
  breadcrumb: string;
  btnText: string;
  onClick?: () => void;
  children?: React.ReactNode;
};
