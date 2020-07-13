import React, {useState, useEffect} from 'react';
import firebase from '../../firebase/config';
import Loader from '../layout/Loader';
import DeleteUserModal from './DeleteUserModal';
import EditUserModal from './EditUserModal';

const UsersPanel = () => {
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const [editUserModal, setEditUserModal] = useState(false);

    const callListAllUsersFn = () => {
        const listAllUsers = firebase.functions().httpsCallable('listAllUsers');
        listAllUsers()
            .then(result => setUsers(result.data))
            // .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        callListAllUsersFn();
    }, [])

    const chooseUser = (user, type) => {
        setUser(user);
        if (type === 'delete') setDeleteUserModal(true);
        if (type === 'edit') setEditUserModal(true);
    }

    return (
        <>
        {!users && <Loader />}
        <DeleteUserModal modal={deleteUserModal} setModal={setDeleteUserModal} user={user} callListAllUsersFn={callListAllUsersFn}/>
        <EditUserModal modal={editUserModal} setModal={setEditUserModal} user={user} callListAllUsersFn={callListAllUsersFn}/>
        <div className="users-wrapper">
            <table className="users-table">
                <thead className="users-head">
                    <tr className="users-headers-row">
                        <th scope="col" className="users-header">Index</th>
                        <th scope="col" className="users-header">UID</th>
                        <th scope="col" className="users-header">Email</th>
                        <th scope="col" className="users-header">Display name</th>
                        <th scope="col" className="users-header">Photo URL</th>
                        <th scope="col" className="users-header">Custom claims</th>
                        <th scope="col" className="users-header">Creation time</th>
                        <th scope="col" className="users-header">Actions</th>
                    </tr>
                </thead>
                <tbody className="users-body">
                    {users && users.map((user, idx) => {
                        return (
                            <tr key={user.uid} className="user-row">
                                <td className="user-data">{idx+1}</td>
                                <td className="user-data">{user.uid}</td>
                                <td className="user-data">{user.email}</td>
                                <td className="user-data">{user.displayName ? user.displayName : 'none'}</td>
                                <td className="user-data">{user.photoURL ? user.photoURL : 'none'}</td>
                                <td className="user-data">{user.customClaims ? 'admin' : 'none'}</td>
                                <td className="user-data">{user.metadata.creationTime}</td>
                                <td className="user-data user-data__btns">
                                    <button className="user-btn user-btn_edit" onClick={() => chooseUser(user, 'edit')}>EDYTUJ</button>
                                    <button className="user-btn" onClick={() => chooseUser(user, 'delete')}>USUŃ</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default UsersPanel;
