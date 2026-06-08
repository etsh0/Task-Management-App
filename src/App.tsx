import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { ToastContainer } from 'react-toastify';
import AuthLayout from './layouts/AuthLayout';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import AppLayout from './layouts/AppLayout/AppLayout';
import Projects from './features/projects/components/Projects';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* main layout */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/project" replace />} />
            <Route path="project" element={<Projects />} />
            <Route path="epics" element={<div>epcis</div>} />
            <Route path="tasks" element={<div>tasks</div>} />
            <Route path="members" element={<div>members</div>} />
            <Route path="details" element={<div>details</div>} />
          </Route>
          {/* auth pages */}
          <Route element={<AuthLayout />}>
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
