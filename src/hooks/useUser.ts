import { useEffect, useState } from 'react';
import { getUserData } from '../services/api/user';

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUser(data.user_metadata);
    };

    fetchUserData();
  }, []);

  return { user };
};
