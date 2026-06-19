import ProjecsIcon from '../../assets/icons/ProjecsIcon';
import ProjectDetailIcon from '../../assets/icons/ProjectDetailIcon';
import ProjectEpicIcon from '../../assets/icons/ProjectEpicIcon';
import ProjectMemberIcon from '../../assets/icons/ProjectMemberIcon';
import ProjectTaskIcon from '../../assets/icons/ProjectTaskIcon';
import type { linkItem } from '../types/linkItem';

export const Links: linkItem[] = [
  {
    name: 'Projects',
    mobileName: 'Projects',
    path: '/project',
    icon: <ProjecsIcon />,
  },
  {
    name: 'Project Epic',
    mobileName: 'Epics',
    path: 'epics',
    icon: <ProjectEpicIcon />,
  },
  {
    name: 'Project Tasks',
    mobileName: 'Tasks',
    path: 'tasks?view=board',
    icon: <ProjectTaskIcon />,
  },
  {
    name: 'Project Members',
    mobileName: 'Members',
    path: 'members',
    icon: <ProjectMemberIcon />,
  },
  {
    name: 'Project Details',
    mobileName: 'Details',
    path: 'edit',
    icon: <ProjectDetailIcon />,
  },
];
