import ArrowLeft2 from '../../../assets/icons/ArrowLeft2';
import LogoutIcon from '../../../assets/icons/LogoutIcon';
import Logo from '../../../assets/images/Logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CollapsedLogo from '../../../assets/icons/CollapsedLogo';
import ArrowRight2 from '../../../assets/icons/ArrowRight2';
import { logOut } from '../../../services/userLogout';
import { toast } from 'react-toastify';
import { Links } from '../../../shared/data/Links';

export default function DesktopSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (err) {
      console.log(err);
      toast.error('Logout failed');
    }
  };

  return (
    <div
      className={`flex flex-col h-screen bg-surface-low py-4 transition-all duration-300 ${isCollapsed ? 'w-20 px-2 items-center' : 'w-[256px] px-4'} `}
    >
      <div className="pb-8 px-2">
        {isCollapsed ? <CollapsedLogo /> : <img src={Logo} alt="" />}
      </div>
      <div className={`links flex flex-col flex-1 gap-1`}>
        {Links.map((link, idx) => (
          <NavLink
            to={link.path}
            key={idx}
            className={({ isActive }) =>
              `font-medium text-body-md leading-5 rounded-sm px-3 py-2.5 ${isCollapsed ? 'py-4 text-[#041B3C99]' : 'text-[#041B3C]'} flex items-center gap-3 cursor-pointer hover:bg-[#FFFFFF] hover:text-primary transition-colors duration-300 ${isActive ? 'bg-[#FFFFFF] text-primary' : ''}`
            }
          >
            {link.icon}
            {!isCollapsed && link.name}
          </NavLink>
        ))}
      </div>
      <div
        className={`pt-6 border-t border-border flex flex-col gap-1 ${isCollapsed && 'items-center'}`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="items-center gap-3 py-2.5 px-3 cursor-pointer hidden sm:flex"
        >
          {!isCollapsed ? <ArrowLeft2 /> : <ArrowRight2 />}
          {!isCollapsed && (
            <span className="text-body-md font-medium leading-5">Collapse</span>
          )}
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 py-2.5 px-3 text-error cursor-pointer"
        >
          <LogoutIcon />
          {!isCollapsed && (
            <span className="text-body-md font-medium leading-5">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
}
