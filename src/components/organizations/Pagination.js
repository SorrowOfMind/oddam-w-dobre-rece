import React from 'react';
import PropTypes from 'prop-types';


const Pagination = ({paginate, numOfRecords, recordsPerPage}) => {
    const pages = [];
    const pagesTotal = Math.ceil(numOfRecords/recordsPerPage);
    for(let i = 1; i <= pagesTotal; i++) {
        pages.push(i)
    }
    return (
        <ul className="pagination">
            {numOfRecords > 3 && pages.map(page => <li onClick={paginate} key={page} className="pageNum">{page}</li>)}
        </ul>
    )
}

Pagination.propTypes = {
    paginate: PropTypes.func.isRequired,
    numOfRecords: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired
}

export default Pagination;
