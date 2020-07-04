import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

const HomeHeader = () => {
    const auth = useSelector(state => state.firebase.auth);
    const giveAwayPath = auth.uid ? '/oddaj-rzeczy' : '/login';
    const collectionPath = auth.uid ? '/' : '/login';
    return (
        <header className="header">
            <div className="clearfix container">
                <div className="header__content">
                    <div className="header__titles">
                        <h1 className="header__title title">Zacznij Pomagać!</h1>
                        <h2 className="header__subtitle">Oddaj niechciane rzeczy w zaufane ręce!</h2>
                    </div>
                    <div className="header__btns">
                        <Link to={giveAwayPath} ><button className="btn header__btn">ODDAJ RZECZY</button></Link>
                        <Link to={collectionPath} ><button className="btn header__btn">ZORGANIZUJ ZBIÓRKĘ</button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;