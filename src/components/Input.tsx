import type { InputProps } from '../types/input';

export default function Input({ type, placeholder, name, value }: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="py-3.5 px-4 rounded-sm bg-surface-highest text-[16px] text-[#737685] font-normal w-full focus:outline-0"
      />
    </>
  );
}
