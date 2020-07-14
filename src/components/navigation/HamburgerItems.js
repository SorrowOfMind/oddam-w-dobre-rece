import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';

import MobileLoggedOutLinks from './MobileLoggedOutLinks';
import MobileLoggedInLinks from './MobileLoggedInLinks';

const linksListVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0,
            mass: 0.2,
            damping: 8,
            staggerChildren: 0.3,
            delayChildren: 0.4
        }
    },
    closed: {
        x: '100vw',
        opacity: 0,
    }
}

const linksVariants = {
    closed: {
        opacity: 0,
        x: '100vw'
    },
    open: {
        opacity: 1,
        x: 0
    }
}

const HamburgerItems = ({isOpen, toggleOpen, homePage}) => {
    const auth = useSelector(state => state.firebase.auth)
    const links = auth.uid ? <MobileLoggedInLinks linksVariants={linksVariants} toggleOpen={toggleOpen}/> : <MobileLoggedOutLinks linksVariants={linksVariants} toggleOpen={toggleOpen} />;
    const scrollLinks = [
        {
            to: 'steps',
            title: 'O co chodzi?'
        }, {
            to: 'about',
            title: 'O nas'
        }, {
            to: 'organizations',
            title: 'Fundacja i organizacja'
        }, {
            to: 'contact',
            title: 'Kontakt'
        }
    ]
    return (
        <motion.ul
            variants={linksListVariants}
            initial="closed"
            animate={isOpen ? "open": "closed"}
            className="hamburger-commom-items">
            <Link to="/">
                <motion.li variants={linksVariants} className="hamburger-commom-link" onClick={toggleOpen}>Start</motion.li>
            </Link>
            {homePage && scrollLinks.map(link => (
                <ScrollLink
                    to={link.to}
                    key={link.to}
                    spy={true}
                    smooth={true}
                    onClick={toggleOpen}>
                    <motion.li variants={linksVariants} className="hamburger-commom-link">{link.title}</motion.li>
                </ScrollLink>
            ))}
            {auth.isLoaded && links}
        </motion.ul>
    )
}

export default HamburgerItems;
