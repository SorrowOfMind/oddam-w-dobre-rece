import React from 'react';
import {Link} from 'react-router-dom';

const LoggedInLinks = () => {
    return (
        <>
            <li className="link-in">Cześć </li>
            <li className="link-in link-in_yellow-border">Oddaj rzeczy</li>
            <Link to="/logout"><li className="link-in link-logout">Wyloguj</li></Link>
        </>
    )
}

export default LoggedInLinks;
