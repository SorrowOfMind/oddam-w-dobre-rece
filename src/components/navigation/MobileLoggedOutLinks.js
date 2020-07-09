import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const MobileLoggedOutLinks = ({linksVariants, toggleOpen}) => {
    return (
        <>
            <Link to="/login"><motion.li variants={linksVariants} onClick={toggleOpen} className="mobile-link-out hamburger-commom-link">Zaloguj</motion.li></Link>
            <Link to='/signup'><motion.li className="mobile-link-out hamburger-commom-link" onClick={toggleOpen} variants={linksVariants}><span className="link__content">Załóż konto</span></motion.li></Link>
        </>
    )
}

export default MobileLoggedOutLinks;