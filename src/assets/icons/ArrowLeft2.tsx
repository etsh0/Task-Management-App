type props = {
  className?: string;
};

export default function ArrowLeft2({ className = 'w-3 h-3' }: props) {
  return (
    <div>
      <svg
        viewBox="0 0 12 20"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
          fill="#041B3C"
        />
      </svg>
    </div>
  );
}
