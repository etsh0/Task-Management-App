import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { ToastContainer } from 'react-toastify';
import AuthLayout from './layouts/AuthLayout';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* main layout */}
          <Route path="/" element={<div>main layout</div>}>
            <Route index element={<div>project page</div>} />
          </Route>
          {/* auth pages */}
          <Route element={<AuthLayout />}>
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
