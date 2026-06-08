import { useEffect, useState } from 'react';
import { getUserData } from '../../services/user';

export interface User {
  id: string;
  name: string;
  job_title: string;
  email: string;
}

interface UseUserReturn {
  user: User | null;
}

export const useUser = (): UseUserReturn => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUser(data.user_metadata);
    };

    fetchUserData();
  }, []);

  return { user };
};
