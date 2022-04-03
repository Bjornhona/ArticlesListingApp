import React from "react"
import './paginationBar.scss';

const PaginationBar = ({page, setPage, totalPages}) => {
  const pagesInPagination = 5;

  const goToNextPage = () => {
    setPage((page) => page + 1);
  }

  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  }

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((page - 1) / pagesInPagination) * pagesInPagination;
    return new Array(pagesInPagination).fill().map((_, idx) => start + idx + 1);  
  };

  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`prev ${page === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`pagination-item ${page === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className={`next ${page === totalPages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
  )
}

export default PaginationBar;