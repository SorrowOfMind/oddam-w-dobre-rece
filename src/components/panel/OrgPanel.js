import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';

const OrgPanel = ({currentList}) => {
    console.log(currentList)
    return (
        <div className="org-wrapper">
        <button className="admin-org__create">Stwórz</button>
        <ul className="admin-org-list">
            {currentList.map((org, idx) => {
                return (
                    <li key={org.id} className="org-item clearfix">
                        <p className="org-item__idx">{idx+1}</p>
                        <p className="org-item__name">Nazwa: {org.name}</p>
                        <p className="org-item__goal">Cel: {org.goal}</p>
                        <p className="org-item__arr">Zbiórka: {org.items.join(', ')}</p>
                        <div className="org-btns-wrapper">
                            <button className="org-item__btn ">Edytuj</button>
                            <button className="org-item__btn org-item__btn_delete">Usuń</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default OrgPanel
