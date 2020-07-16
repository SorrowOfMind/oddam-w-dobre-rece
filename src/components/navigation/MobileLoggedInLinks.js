import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../actions/authActions';
import {motion} from 'framer-motion';

type MobileLoggedInLinksProps = {
    linksVariants: Object,
    toggleOpen: Function
}

const MobileLoggedInLinks = ({linksVariants, toggleOpen}: MobileLoggedInLinksProps) => {

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
            <motion.li className="mobile-link-in hamburger-commom-link" variants={linksVariants} onClick={toggleOpen}><Link to="/panel">{auth.email}</Link></motion.li>
        </>
    )
}

export default MobileLoggedInLinks;