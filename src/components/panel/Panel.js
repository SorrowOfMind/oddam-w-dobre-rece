import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import firebase from '../../firebase/config';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import UsernameModal from './UsernameModal';
import AdminModal from './AdminModal';

const Panel = () => {
    const auth = useSelector(state => state.firebase.auth);
    const profile = useSelector(state => state.firebase.profile);
    const [userModal, setUserModal] = useState(false);
    const [adminModal, setAdminModal] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [currentList, setCurrentList] = useState('common');

    useFirestoreConnect([
        {
            collection: 'foundations',
            orderBy: ['name']
        },
        {
            collection: 'ngos',
            orderBy: ['name']
        },
        {
            collection: 'locals',
            orderBy: ['name']
        }
    ]);

    const switchList = collection => setCurrentList(collection)

    useEffect(() => {
            checkIfAdmin();
    }, [])

    const checkIfAdmin = () => {
        firebase.auth().currentUser.getIdTokenResult().then(idToken => setAdmin(idToken.claims.admin));
    }

    return (
        <>
        <UsernameModal modal={userModal} setModal={setUserModal} />
        <AdminModal modal={adminModal} setModal={setAdminModal} />
        <div className="panel-wrapper">
            <SidePanel 
                email={auth.email} 
                username={profile.username} 
                setUserModal={setUserModal} 
                setAdminModal={setAdminModal} 
                admin={admin}
                switchList={switchList}
                />
            <MainPanel 
                uid={auth.uid} 
                admin={admin}
                currentList={currentList}
            />
        </div>
        </>
    )
}

export default Panel
