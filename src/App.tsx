import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup';

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
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
