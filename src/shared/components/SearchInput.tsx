import SearchIcon from '../../assets/icons/SearchIcon';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  placeholder = 'Search...',
  className = 'relative',
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-surface-highest focus:outline-0 border border-border w-full rounded-xs py-2.5 pr-6 pl-8 text-body-md"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
}
