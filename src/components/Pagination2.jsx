"use client";

export default function Pagination2({
  page,
  setPage,
  totalPages,
}) {
  if (!totalPages || totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {
    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-3 mt-10 sm:mt-14 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl
        border border-[#143D60]/30 text-[#143D60] disabled:opacity-40
        hover:bg-[#143D60]/10 transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl
            border border-[#143D60]/30 text-[#143D60] hover:bg-[#143D60]/10 transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">
              ...
            </span>
          )}
        </>
      )}

      {/* PAGES */}
      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl font-medium transition
            ${
              page === pageNumber
                ? "bg-gradient-to-r from-[#143D60] to-[#0f2c46] text-white shadow-md"
                : "border border-[#143D60]/30 text-[#143D60] hover:bg-[#143D60]/10"
            }`}
        >
          {pageNumber}
        </button>
      ))}

      {/* LAST PAGE */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">
              ...
            </span>
          )}

          <button
            onClick={() => setPage(totalPages)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl
            border border-[#143D60]/30 text-[#143D60] hover:bg-[#143D60]/10 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl
        border border-[#143D60]/30 text-[#143D60] disabled:opacity-40
        hover:bg-[#143D60]/10 transition"
      >
        Next
      </button>

    </div>
  );
}