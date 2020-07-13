import React from 'react';
import {useSelector} from 'react-redux';
import Loader from '../layout/Loader';
import {useFirestoreConnect} from 'react-redux-firebase';

const CommonPanel = ({uid}) => {
    const aidNum = useSelector(state => state.firestore.ordered.aid)

    useFirestoreConnect([
        {
            collection: "aid",
            where: ['user', '==', uid]
        }
    ]);

    return (
        <>
            {!aidNum && <Loader />}
            <h2 className="panel-title">Twoje liczby</h2>
            {aidNum &&
            <ul className="user-aid-list">
                <li className="user-aid-item">
                    <div className="user-aid__num"><span>{aidNum.length}</span></div>
                    <span className="user-aid__dscr">Tyle razy oddałeś swoje rzeczy</span>
                </li>
                 <li className="user-aid-item">
                    <div className="user-aid__num"><span>0</span></div>
                    <span className="user-aid__dscr">Tyle razy wsparłeś organizacje</span>
                </li>
                <li className="user-aid-item">
                    <div className="user-aid__num"><span>0</span></div>
                    <span className="user-aid__dscr">Tyle razy zorganizowałeś zbiórkę</span>
                </li>
            </ul>}
        </>
    )
}

export default CommonPanel
