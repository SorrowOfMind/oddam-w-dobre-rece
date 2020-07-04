import React from 'react';

const GiveAwayNote = ({title}) => {
    return (
        <div className="giveaway-note">
            <h2 className="giveaway-note__title">Ważne!</h2>
            <p className="giveaway-note__text">{title}</p>
        </div>
    )
}

export default GiveAwayNote;
