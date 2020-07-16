import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

type MobileLoggedOutLinksProps = {
    linksVariants: Object,
    toggleOpen: Function
}

const MobileLoggedOutLinks = ({linksVariants, toggleOpen}: MobileLoggedOutLinksProps) => {
    return (
        <>
            <Link to="/login"><motion.li variants={linksVariants} onClick={toggleOpen} className="mobile-link-out hamburger-commom-link">ZALOGUJ</motion.li></Link>
            <Link to='/signup'><motion.li className="mobile-link-out hamburger-commom-link" onClick={toggleOpen} variants={linksVariants}><span className="link__content">ZAŁÓŻ KONTO</span></motion.li></Link>
        </>
    )
}

export default MobileLoggedOutLinks;