import logo from '../assets/images/Logo.svg';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <div className="px-6 md:px-10 py-6.5">
        <div className="mb-6.5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
