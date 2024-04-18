import React from "react";

const PaginationControls = ({
  totalPages,
  currentPage,
  handlePageClick,
  handlePrevious,
  handleNext,
}) => {
  const pageNumbers = () => {
    let pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="pagination-controls">
      <button
        className="cursor button text-black"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        Prev
      </button>
      {pageNumbers().map((number, index) => (
        <button
          key={index}
          className={`button button-blue ${
            currentPage === number ? "active" : ""
          }`}
          disabled={number === "..."}
          onClick={() => number !== "..." && handlePageClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="cursor button text-black"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
