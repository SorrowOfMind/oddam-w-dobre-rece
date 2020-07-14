import React from 'react';

const SidePanel = ({email, username, setUserModal, setAdminModal, admin, switchList}) => {

    return (
        <div className="side-panel">
            <h1 className="panel-title">Twoje Konto</h1>
            <div className="user-data">
                <div className="user-section">
                    <p className="panel-subtitle">E-mail:</p>
                    <p>{email}</p>
                </div>
                <div className="user-section">
                    <p className="panel-subtitle">Username:</p>
                    <p>{username}</p>
                    <button className="btn__user-edit" onClick={() => setUserModal(true)}>ZMIEŃ</button>
                </div>
                <button className="btn__admin-2" onClick={() => switchList('common')}>TWOJE LICZBY</button>
                {admin &&
                <div className="admin-section">
                    <button className="btn__admin-1" onClick={() => setAdminModal(true)}>NADAJ UPRAWNIENIA</button>
                    <button className="btn__admin-2" onClick={() => switchList('foundations')}>FUNDACJE</button>
                    <button className="btn__admin-3" onClick={() => switchList('ngos')}>ORGANIZACJE POZARZĄDOWE</button>
                    <button className="btn__admin-4" onClick={() => switchList('locals')}>ZBIÓRKI LOKALNE</button>
                    <button className="btn__admin-5" onClick={() => switchList('users')}>USERS</button>
                </div>}
            </div>
        </div>
    )
}

export default SidePanel;
