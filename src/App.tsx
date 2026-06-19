import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { ToastContainer } from 'react-toastify';
import AuthLayout from './layouts/AuthLayout';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import AppLayout from './layouts/AppLayout/AppLayout';
import ProjectsPage from './pages/projects/ProjectsPage';
import AddProjectPage from './pages/projects/AddProjectPage';
import Members from './pages/projects/Members';
import Epics from './pages/projects/Epics';
import AddEpicPage from './pages/projects/AddEpicPage';
import AddNewTaskPage from './pages/projects/AddNewTaskPage';
import TasksPage from './pages/projects/TasksPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* main layout */}
          <Route path="/" element={<Navigate to="/project" replace />} />
          <Route path="/project" element={<AppLayout />}>
            <Route index element={<ProjectsPage />} />
            <Route path="add" element={<AddProjectPage />} />
            <Route path=":projectId">
              <Route index element={<Navigate to="epics" replace />} />
              <Route path="epics" element={<Epics />} />
              <Route path="epics/new" element={<AddEpicPage />} />
              <Route path="edit" element={<AddProjectPage />} />
              <Route path="tasks" element={<TasksPage />} />
              <Route path="tasks/new" element={<AddNewTaskPage />} />
              <Route path="members" element={<Members />} />
            </Route>
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
