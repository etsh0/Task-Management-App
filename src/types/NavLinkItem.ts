import type { ReactNode } from 'react';

export type NavLinkItem = {
  name: string;
  mobileName?: string;
  path: string;
  icon: ReactNode;
};
