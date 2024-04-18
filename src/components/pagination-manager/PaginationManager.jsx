import React, { useState } from "react";
import { items } from "./data";
import PaginationControls from "./PaginationControls";
import ItemList from "./ItemList";
import "./styles.css";

const PaginationManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (number) => setCurrentPage(number);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleNext = () => setCurrentPage(currentPage + 1);
  const navigateToTaskManager = () => (window.location.href = "/");

  return (
    <div>
      <div>
        <button className="button button-green" onClick={navigateToTaskManager}>
          Task Manager
        </button>
      </div>
      <ItemList items={currentItems} />
      <PaginationControls
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default PaginationManager;
