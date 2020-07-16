import React from 'react';

type OrgRecordsProps = {
    records: Array<Object>
}

const OrganizationRecords = ({records}: OrgRecordsProps) => {
    return (
        <ul className="organizations-list container">
            {records.map(record => (
                <li key={record.id} className="organizations-item">
                    <p className="organization-name">{record.name}</p>
                    <p className="organization-goal">Cel i misja: {record.goal}</p>
                    <p className="organization-items">{record.items.join(', ')}</p>
                </li>
            ))}
        </ul>
    )
}

export default OrganizationRecords;
