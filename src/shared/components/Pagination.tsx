import ArrowLeft2 from '../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../assets/icons/ArrowRight2';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'numbers' | 'simple';
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'numbers',
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  if (variant === 'simple') {
    return (
      <div className="pagination">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft2 />
          </button>
          <span className="text-neutral text-[12px] font-medium leading-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRight2 />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`flex items-center gap-2 text-label-sm`}>
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-neutral cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft2 className="w-[4.32px] h-1.75" />
        </button>
        {pages.map((page, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 border border-border rounded-xs flex items-center justify-center cursor-pointer ${currentPage === page ? 'text-white bg-primary' : 'text-neutral'}`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 border border-border rounded-xs flex items-center justify-center cursor-pointer text-neutral disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ArrowRight2 className="w-[4.32px] h-1.75" />
        </button>
      </div>
    </>
  );
}
