import type { ButtonProps } from '../types/button';

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button type="submit" className="primary-btn">
        {text}
      </button>
    </>
  );
}
