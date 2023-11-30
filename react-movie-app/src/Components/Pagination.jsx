import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange, currentPage }) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <ul className="pagination">
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <a className="page-link" href="#">
          이전
        </a>
      </li>
      {Array.from({ length: pageNumbers }, (_, index) => (
        <li
          key={index + 1}
          className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => handlePageChange(index + 1)}
        >
          <a className="page-link" href="#">
            {index + 1}
          </a>
        </li>
      ))}
      <li
        className={`page-item ${
          currentPage === pageNumbers ? "disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <a className="page-link" href="#">
          다음
        </a>
      </li>
    </ul>
  );
};

export default Pagination;