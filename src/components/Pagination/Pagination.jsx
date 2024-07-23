import React from 'react';
import { NextButton, PreviousButton } from '../Buttons/Buttons';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <section className="pagination">
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <PreviousButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <NextButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </section>
  );
};

export default Pagination;