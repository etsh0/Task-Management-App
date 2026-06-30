export type Project = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HeaderProps = {
  title: string;
  breadcrumb: BreadcrumbItem[];
  btnText?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};
