import React from 'react';
import {useSelector} from 'react-redux';
 
import CommonLinks from './CommonLinks';
import LoggedOutLinks from './LoggedOutLinks';
import LoggedInLinks from './LoggedInLinks';

const Navbar = () => {
    const auth = useSelector(state => state.firebase.auth)
    const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
    return (
        <nav className="navbar container">
            <ul className="auth-links">
                {auth.isLoaded && links}
            </ul>
            <CommonLinks />
        </nav>
    )
}

export default Navbar;