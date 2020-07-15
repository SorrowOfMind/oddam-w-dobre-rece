import React from 'react';

const Pagination = ({paginate, numOfRecords, recordsPerPage, currentPage}) => {
    const pagesTotal = Math.ceil(numOfRecords/recordsPerPage);
    const pages = Array.from({length: pagesTotal}, (_, idx) => idx + 1);

    return (
        <ul className="pagination">
            {numOfRecords > 3 && 
                pages.map(page => <li onClick={() => paginate(page)} key={page} className={currentPage === page ? "pageNum active-type" : "pageNum"}>{page}</li>)}
        </ul>
    )
}

export default Pagination;
