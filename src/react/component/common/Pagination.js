import React from 'react'
import _ from 'lodash'

const Pagination = ({ total, pageSize, relatedView, handlePagination}) => {

  const totalPages = Math.ceil(total / pageSize)

  if (totalPages === 1) return null


  const pages = _.range(1, totalPages + 1 )

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {
            pages.map(page => {

              return (
                <li className={page === relatedView.currentPage ? "page-item active": "page-item"} key={page}>
                  <a className="page-link"
                     onClick={() => handlePagination(page)}
                  >
                    {page}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
