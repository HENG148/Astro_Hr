interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePage = () => {
    const visiblePage = [];
    const maxVisible = 5;

    if (currentPage > 2) {
      visiblePage.push(1);
      if (currentPage > 3) visiblePage.push("...");
    }
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) end = Math.min(4, totalPages - 1);
    if (currentPage >= totalPages - 2) start = Math.max(totalPages - 3, 2);

    for (let i = start; i <= end; i++) {
      visiblePage.push(i);  
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) visiblePage.push("...");
      visiblePage.push(totalPages);
    }

    return visiblePage.length ? visiblePage : [1];
  }
  const visiblePages = getVisiblePage();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
      
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-blue-600 hover:bg-blue-50 border border-gray-200'
          }`}
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>
        
        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white font-medium' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${
            currentPage === totalPages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-blue-600 hover:bg-blue-50 border border-gray-200'
          }`}
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;