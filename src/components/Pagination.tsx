import React from 'react';

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  deleteSelectedUsers: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
  deleteSelectedUsers,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="footer">
      <nav>
        <div className="pagination">
          <button onClick={() => paginate(1)} className="goto-first-page">
            {'<<'}
          </button>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="goto-prev-page"
          >
            {'<'}
          </button>
          {pageNumbers.map((pageNumber) => {
            return (
              <button
                onClick={() => paginate(pageNumber)}
                key={pageNumber}
                className={
                  'page-item' + (currentPage === pageNumber ? '-selected' : '')
                }
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() => paginate(currentPage + 1)}
            className="goto-next-page"
          >
            {'>'}
          </button>
          <button
            onClick={() => paginate(Math.ceil(totalUsers / usersPerPage))}
            className="goto-last-page"
          >
            {'>>'}
          </button>
        </div>
      </nav>
      <button id="delete-selected" onClick={() => deleteSelectedUsers()}>
        Delete Selected
      </button>
    </div>
  );
};
export default Pagination;
