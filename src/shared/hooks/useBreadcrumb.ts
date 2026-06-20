import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { BreadcrumbItem } from '../../features/projects/type';

/**
 * Builds the breadcrumb array based on the current route.
 *
 * Supported patterns:
 *   /project                       → Projects
 *   /project/add                   → Projects > Add New Project
 *   /project/:id/edit              → Projects > {name} > Edit Project
 *   /project/:id/members           → Projects > {name} > Members
 *   /project/:id/epics             → Projects > {name} > Epics
 *   /project/:id/epics/new         → Projects > {name} > Epics > New Epic
 *   /project/:id/tasks             → Projects > {name} > Tasks
 *   /project/:id/tasks/new         → Projects > {name} > Tasks > New Task
 */
export function useBreadcrumb(): BreadcrumbItem[] {
  const { projectId } = useParams<{ projectId: string }>();
  const { pathname } = useLocation();

  const projects = useSelector((state: RootState) => state.projects.projects);
  const selectedProject = useSelector(
    (state: RootState) => state.projects.selectedProject,
  );

  // Resolve project name: prefer Redux list, fall back to selectedProject
  const project = projectId
    ? (projects.find((p) => p.id === projectId) ?? selectedProject)
    : null;
  const projectName = project?.name ?? 'Project';

  const projectsItem: BreadcrumbItem = { label: 'Projects', href: '/project' };

  // /project/add
  if (pathname === '/project/add') {
    return [projectsItem, { label: 'Add New Project' }];
  }

  if (projectId) {
    const projectItem: BreadcrumbItem = {
      label: projectName,
      href: `/project/${projectId}/epics`,
    };

    // /project/:id/edit
    if (pathname.endsWith('/edit')) {
      return [projectsItem, projectItem, { label: 'Edit Project' }];
    }

    // /project/:id/members
    if (pathname.endsWith('/members')) {
      return [projectsItem, projectItem, { label: 'Members' }];
    }

    // /project/:id/epics/new
    if (pathname.endsWith('/epics/new')) {
      return [
        projectsItem,
        projectItem,
        { label: 'Epics', href: `/project/${projectId}/epics` },
        { label: 'New Epic' },
      ];
    }

    // /project/:id/epics
    if (pathname.endsWith('/epics')) {
      return [projectsItem, projectItem, { label: 'Epics' }];
    }

    // /project/:id/tasks/new
    if (pathname.endsWith('/tasks/new')) {
      return [
        projectsItem,
        projectItem,
        { label: 'Tasks', href: `/project/${projectId}/tasks` },
        { label: 'New Task' },
      ];
    }

    // /project/:id/tasks
    if (pathname.endsWith('/tasks')) {
      return [projectsItem, projectItem, { label: 'Tasks' }];
    }
  }

  // /project (root)
  return [{ label: 'Projects' }];
}
