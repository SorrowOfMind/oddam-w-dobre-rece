import React from 'react';
import {useSelector} from 'react-redux';
import { useMediaQuery } from 'react-responsive';
 
import CommonLinks from './CommonLinks';
import LoggedOutLinks from './LoggedOutLinks';
import LoggedInLinks from './LoggedInLinks';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const auth = useSelector(state => state.firebase.auth)
    const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
    return (
        <nav className={isMobile ? "navbar-mobile" : "navbar container"}>
            {isMobile ? 
            <HamburgerMenu /> :
            (<>
                <ul className="auth-links">
                    {auth.isLoaded && links}
                 </ul>
                <CommonLinks />
            </>)}
        </nav>
    )
}

export default Navbar;