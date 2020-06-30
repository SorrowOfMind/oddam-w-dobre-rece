import React from 'react';
import PropTypes from 'prop-types';

const OrganizationRecords = ({records}) => {
    return (
        <ul className="organizations-list container">
            {records.map(record => (
                <li key={record.id} className="organizations-item clearfix">
                    <p className="organization-name">{record.name}</p>
                    <p className="organization-goal">Cel i misja: {record.goal}</p>
                    <p className="organization-items">{record.items.join(', ')}</p>
                </li>
            ))}
        </ul>
    )
}

OrganizationRecords.propTypes = {
    records: PropTypes.array.isRequired
}

export default OrganizationRecords;
