import React from 'react';
import {Link} from 'react-router-dom';

const LogOutPage = () => {
    return (
        <div className="logout-wrapper">
            <div className="logout__inner-wrapper">
                <h1 className="title logout__title">Wylogowanie nastąpiło pomyślnie!</h1>
                <Link to="/"><button className="common-link_grey-border logout__btn">Strona główna</button></Link>
            </div>
        </div>
    )
}

export default LogOutPage;
