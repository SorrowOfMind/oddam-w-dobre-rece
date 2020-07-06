import React, {useEffect} from 'react';
import GiveAwayHeader from './GiveAwayHeader';
import GiveAwayForm from '../forms/GiveAwayForm';
import Footer from './Footer';

const GiveAway = () => {
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <GiveAwayHeader />
            <GiveAwayForm />
            <Footer />
        </div>
    )
}

export default GiveAway;
