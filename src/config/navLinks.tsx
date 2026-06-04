import type { NavLinkItem } from '../types/NavLinkItem';
import ProjecsIcon from '../assets/icons/ProjecsIcon';
import ProjectEpicIcon from '../assets/icons/ProjectEpicIcon';
import ProjectTaskIcon from '../assets/icons/ProjectTaskIcon';
import ProjectMemberIcon from '../assets/icons/ProjectMemberIcon';
import ProjectDetailIcon from '../assets/icons/ProjectDetailIcon';

export const navLinks: NavLinkItem[] = [
  {
    name: 'Projects',
    mobileName: 'Projects',
    path: '/',
    icon: <ProjecsIcon />,
  },
  {
    name: 'Project Epic',
    mobileName: 'Epics',
    path: '/epics',
    icon: <ProjectEpicIcon />,
  },
  {
    name: 'Project Tasks',
    mobileName: 'Tasks',
    path: '/tasks',
    icon: <ProjectTaskIcon />,
  },
  {
    name: 'Project Members',
    mobileName: 'Members',
    path: '/members',
    icon: <ProjectMemberIcon />,
  },
  {
    name: 'Project Details',
    mobileName: 'Details',
    path: '/details',
    icon: <ProjectDetailIcon />,
  },
];
