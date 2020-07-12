import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import DeletionModal from './DeletionModal';
import EditModal from './EditModal';
import CreateModal from './CreateModal';

const OrgPanel = ({currentList}) => {
    const [deletionModal, setDeletionModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [currentDoc, setCurrentDoc] = useState(null);

    const foundations = useSelector(state => state.firestore.ordered.foundations);
    const ngos = useSelector(state => state.firestore.ordered.ngos);
    const locals = useSelector(state => state.firestore.ordered.locals);

    const chooseOrg = (id, modalType) => {
        setCurrentDoc(id);
        if (modalType === 'delete') setDeletionModal(true);
        if (modalType === 'edit') setEditModal(true);
    }

    return (
        <>
        <DeletionModal modal={deletionModal} setModal={setDeletionModal} id={currentDoc} collection={currentList} />
        <EditModal  modal={editModal} setModal={setEditModal} id={currentDoc} collection={currentList} />
        <CreateModal modal={createModal} setModal={setCreateModal} collection={currentList} />
        <div className="org-wrapper">
        <button className="admin-org__create" onClick={() => setCreateModal(true)}>Stwórz</button>
        <ul className="admin-org-list">
            {(foundations && currentList === 'foundations') && foundations.map((org, idx) => {
                return (
                    <li key={org.id} className="org-item clearfix">
                        <p className="org-item__idx">{idx+1}</p>
                        <p className="org-item__name">Nazwa: {org.name}</p>
                        <p className="org-item__goal">Cel: {org.goal}</p>
                        <p className="org-item__arr">Zbiórka: {org.items.join(', ')}</p>
                        <div className="org-btns-wrapper">
                            <button className="org-item__btn" onClick={() => chooseOrg(org.id, "edit")}>Edytuj</button>
                            <button className="org-item__btn org-item__btn_delete" onClick={() => chooseOrg(org.id, "delete")}>Usuń</button>
                        </div>
                    </li>
                )
            })}
            {(ngos && currentList === 'ngos') && ngos.map((org, idx) => {
                return (
                    <li key={org.id} className="org-item clearfix">
                        <p className="org-item__idx">{idx+1}</p>
                        <p className="org-item__name">Nazwa: {org.name}</p>
                        <p className="org-item__goal">Cel: {org.goal}</p>
                        <p className="org-item__arr">Zbiórka: {org.items.join(', ')}</p>
                        <div className="org-btns-wrapper">
                            <button className="org-item__btn" onClick={() => chooseOrg(org.id, "edit")}>Edytuj</button>
                            <button className="org-item__btn org-item__btn_delete" onClick={() => chooseOrg(org.id, "delete")}>Usuń</button>
                        </div>
                    </li>
                )
            })}
            {(locals && currentList === 'locals') && locals.map((org, idx) => {
                return (
                    <li key={org.id} className="org-item clearfix">
                        <p className="org-item__idx">{idx+1}</p>
                        <p className="org-item__name">Nazwa: {org.name}</p>
                        <p className="org-item__goal">Cel: {org.goal}</p>
                        <p className="org-item__arr">Zbiórka: {org.items.join(', ')}</p>
                        <div className="org-btns-wrapper">
                            <button className="org-item__btn" onClick={() => chooseOrg(org.id, "edit")}>Edytuj</button>
                            <button className="org-item__btn org-item__btn_delete" onClick={() => chooseOrg(org.id, "delete")}>Usuń</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
        </>
    )
}

export default OrgPanel
