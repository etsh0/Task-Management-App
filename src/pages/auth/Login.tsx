import { useEffect } from 'react';
import Form from '../../features/auth/Login/components/Form';
import { getAccessToken } from '../../features/auth/Login/cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Form />
    </>
  );
}
