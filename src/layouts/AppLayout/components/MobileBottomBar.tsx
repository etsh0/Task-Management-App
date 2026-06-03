import { navLinks } from '../../../config/navLinks';
import { NavLink } from 'react-router-dom';

export default function MobileBottomBar() {
  return (
    <>
      <div className="h-16 bg-surface-low flex items-center justify-between px-[27.86px] w-full">
        {navLinks.map((link, idx) => (
          <NavLink
            end
            to={link.path}
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
