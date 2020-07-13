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
            <table className="table">
                <thead className="table-head">
                    <tr className="table-headers-row">
                        <th scope="col" className="table-header">Index</th>
                        <th scope="col" className="table-header">UID</th>
                        <th scope="col" className="table-header">Email</th>
                        <th scope="col" className="table-header">Display name</th>
                        <th scope="col" className="table-header">Photo URL</th>
                        <th scope="col" className="table-header">Custom claims</th>
                        <th scope="col" className="table-header">Creation time</th>
                        <th scope="col" className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody className="panel-body">
                    {users && users.map((user, idx) => {
                        return (
                            <tr key={user.uid} className="table-row">
                                <td className="table-data">{idx+1}</td>
                                <td className="table-data">{user.uid}</td>
                                <td className="table-data">{user.email}</td>
                                <td className="table-data">{user.displayName ? user.displayName : 'none'}</td>
                                <td className="table-data">{user.photoURL ? user.photoURL : 'none'}</td>
                                <td className="table-data">{user.customClaims ? 'admin' : 'none'}</td>
                                <td className="table-data">{user.metadata.creationTime}</td>
                                <td className="table-data table-data__btns">
                                    <button className="table-btn table-btn_edit" onClick={() => chooseUser(user, 'edit')}>EDYTUJ</button>
                                    <button className="table-btn" onClick={() => chooseUser(user, 'delete')}>USUŃ</button>
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
