import ArrowLeft2 from '../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../assets/icons/ArrowRight2';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div className={`flex items-center gap-2 text-label-sm`}>
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-[#434654] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft2 className="w-[4.32px] h-1.75" />
        </button>
        {pages.map((page, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 border border-border rounded-xs flex items-center justify-center cursor-pointer ${currentPage === page ? 'text-white bg-primary' : 'text-[#434654]'}`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 border border-border rounded-xs flex items-center justify-center cursor-pointer text-[#434654] disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ArrowRight2 className="w-[4.32px] h-1.75" />
        </button>
      </div>
    </>
  );
}
