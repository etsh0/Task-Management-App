import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import DesktopSideBar from './components/DesktopSideBar';
import MobileBottomBar from './components/MobileBottomBar';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../../features/auth/Login/cookie';

export default function AppLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 sm:hidden backdrop-blur-xs"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex">
        <div className="">
          <div
            className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300
              sm:translate-x-0 sm:relative sm:z-auto
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <DesktopSideBar />
          </div>
          <div className="sm:hidden fixed bottom-0 w-full">
            <MobileBottomBar />
          </div>
        </div>
        <div className="grow bg-white">
          <div className="w-full h-16 bg-white border-b-2 border-border px-3 sm:px-8">
            <Header onBurgerClick={() => setSidebarOpen(true)} />
          </div>
          <div className="w-full grow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
