import React from 'react';
import PropTypes from 'prop-types';

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

Pagination.propTypes = {
    paginate: PropTypes.func.isRequired,
    numOfRecords: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired
}

export default Pagination;
