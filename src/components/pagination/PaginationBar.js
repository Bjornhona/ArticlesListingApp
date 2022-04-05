import React from "react"
import './paginationBar.scss';

const PaginationBar = (props) => {
  const {page, totalPages} = props;
  const pagesInPagination = 5;

  const goToNextPage = () => {
    props.setPage(page + 1);
  }

  const goToPreviousPage = () => {
    props.setPage(page - 1);
  }

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    props.setPage(pageNumber);
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
        <h4>prev</h4>
      </button>

      <div className="pagination-group">
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`pagination-group-item ${page === item ? 'active' : null}`}
          >
            <span><h2>{item}</h2></span>
          </button>
        ))}
      </div>

      <button
        onClick={goToNextPage}
        className={`next ${page === totalPages ? 'disabled' : ''}`}
      >
        <h4>next</h4>
      </button>
    </div>
  )
}

export default PaginationBar;