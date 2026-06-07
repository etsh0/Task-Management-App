import { useState } from 'react';

export const useTogglePassword = () => {
  const [visible, setVisible] = useState(false);
  const typeInput = visible ? 'text' : 'password';
  const toggle = () => setVisible((prev) => !prev);

  return {
    visible,
    typeInput,
    toggle,
  };
};
