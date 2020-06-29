import React from 'react';
import {Link} from 'react-router-dom';

const LoggedOutLinks = () => {
    return (
        <>
            <Link to="/login" className="link-out"><li >Zaloguj</li></Link>
            <Link to='/signup'><li className="link-out link-out_yellow-border"><span className="link__content">Załóż konto</span></li></Link>
        </>
    )
}

export default LoggedOutLinks
