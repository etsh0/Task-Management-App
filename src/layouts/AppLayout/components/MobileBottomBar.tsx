import { NavLink, useParams } from 'react-router-dom';
import { Links } from '../../../shared/data/Links';

export default function MobileBottomBar() {
  const { projectId } = useParams();

  const sidebarLinks = projectId
    ? Links
    : Links.filter((link) => ['Projects', 'My Statistics'].includes(link.name));
  return (
    <>
      <div className="h-16 bg-surface-low flex items-center justify-between px-4 w-full">
        {sidebarLinks.map((link, idx) => (
          <NavLink
            to={
              link.path.startsWith('/')
                ? link.path
                : `/project/${projectId}/${link.path}`
            }
            end={link.path === '/project'}
            key={idx}
            className={({ isActive }) =>
              `flex flex-col items-center gap-3 cursor-pointer text-[#041B3CB2] hover:bg-[#FFFFFF] hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`
            }
          >
            <span>{link.icon}</span>
            <span className="text-[10px] font-semibold leading-2.5">
              {link.mobileName}
            </span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
