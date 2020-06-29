import React from 'react';
 
import CommonLinks from './CommonLinks';
import LoggedOutLinks from './LoggedOutLinks';
import LoggedInLinks from './LoggedInLinks';

const Navbar = () => {
    return (
        <nav className="navbar container">
            <ul className="auth-links">
            </ul>
            <CommonLinks />
        </nav>
    )
}

export default Navbar;