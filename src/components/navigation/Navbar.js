import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {withRouter} from 'react-router-dom'; 
import CommonLinks from './CommonLinks';
import LoggedOutLinks from './LoggedOutLinks';
import LoggedInLinks from './LoggedInLinks';
import HamburgerMenu from './HamburgerMenu';

const Navbar = ({history}) => {
    const [homePage, setHomePage] = useState(true);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const auth = useSelector(state => state.firebase.auth)
    const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
    const url = history.location.pathname;

    useEffect(() => {
        if (url !== '/') {
            setHomePage(false);
        }
        return () => setHomePage(true);
    }, [url])

    return (
        <nav className={isMobile ? "navbar-mobile" : "navbar container"}>
            {isMobile ? 
            <HamburgerMenu homePage={homePage}/> :
            (<>
                <ul className="auth-links">
                    {auth.isLoaded && links}
                 </ul>
                <CommonLinks homePage={homePage} />
            </>)}
        </nav>
    )
}

export default withRouter(Navbar);