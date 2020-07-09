import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../actions/authActions';
import {motion} from 'framer-motion';

const MobileLoggedInLinks = ({linksVariants, toggleOpen}) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth);

    const handleLogOut = () => {
        dispatch(logOut);
        toggleOpen();
    }
    
    return (
        <>
            <Link to="/oddaj-rzeczy" onClick={toggleOpen}><motion.li className="mobile-link-in hamburger-commom-link" variants={linksVariants}>ODDAJ RZECZY</motion.li></Link>
            <Link to="/logout"><motion.li className="mobile-link-in hamburger-commom-link" variants={linksVariants} onClick={handleLogOut}>WYLOGUJ</motion.li></Link>
        </>
    )
}

export default MobileLoggedInLinks;