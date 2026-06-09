import type { ButtonProps } from '../types/button';

export default function Button({ children }: ButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="primary-btn flex justify-center items-center gap-1 w-full"
      >
        {children}
      </button>
    </>
  );
}
