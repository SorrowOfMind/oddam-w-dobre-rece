import React from 'react';
import PropTypes from 'prop-types';

const OrganizationRecords = ({collection}) => {
    return (
        <ul className="oraganizations-list container">
            {collection.map(record => (
                <li key={record.id} className="oraganizations-item clearfix">
                    <p className="organization-name">{record.name}</p>
                    <p className="organization-goal">Cel i misja: {record.goal}</p>
                    <p className="organization-items">{record.items.join(', ')}</p>
                </li>
            ))}
        </ul>
    )
}

OrganizationRecords.propTypes = {
    collection: PropTypes.array.isRequired
}

export default OrganizationRecords;
