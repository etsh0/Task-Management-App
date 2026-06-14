import type { ButtonProps } from '../types/button';

export default function Button({ disabled, children }: ButtonProps) {
  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        className={`primary-btn flex justify-center items-center gap-1 w-full ${disabled && "opacity-50 cursor-not-allowed"}`}
      >
        {children}
      </button>
    </>
  );
}
