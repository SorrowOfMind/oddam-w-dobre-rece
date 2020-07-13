import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../actions/authActions';

const LoggedInLinks = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth);

    const handleLogOut = () => {
        dispatch(logOut);
    }
    
    return (
        <>
            <li className="link-in link-panel">Cześć <Link to="/panel">{auth.email}</Link></li>
            <Link to="/oddaj-rzeczy"><li className="link-in link-in_yellow-border">Oddaj rzeczy</li></Link>
            <Link to="/logout"><li className="link-in link-logout" onClick={handleLogOut}>Wyloguj</li></Link>
        </>
    )
}

export default LoggedInLinks;

