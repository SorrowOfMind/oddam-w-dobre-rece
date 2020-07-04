import React from 'react';
import GiveAwayHeader from './GiveAwayHeader';
import GiveAwayNote from './GiveAwayNote';
import GiveAwayForm from '../forms/GiveAwayForm';

const GiveAway = () => {
    return (
        <div>
            <GiveAwayHeader />
            <GiveAwayNote />
            <GiveAwayForm />
        </div>
    )
}

export default GiveAway;
