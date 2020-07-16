import React from 'react';

type GiveAwayNoteProps = {
    title: string
}

const GiveAwayNote = ({title}: GiveAwayNoteProps) => {
    return (
        <div className="giveaway-note">
            <h2 className="giveaway-note__title">Ważne!</h2>
            <p className="giveaway-note__text">{title}</p>
        </div>
    )
}

export default GiveAwayNote;
