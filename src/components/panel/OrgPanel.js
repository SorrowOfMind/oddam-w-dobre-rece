import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import DeleteOrgModal from './DeleteOrgModal';
import EditOrgModal from './EditOrgModal';
import CreateModal from './CreateModal';

type OrgPanelProps = {
    currentList: string
}

const OrgPanel = ({currentList}: OrgPanelProps) => {
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
        <DeleteOrgModal modal={deletionModal} setModal={setDeletionModal} id={currentDoc} collection={currentList} />
        <EditOrgModal  modal={editModal} setModal={setEditModal} id={currentDoc} collection={currentList} />
        <CreateModal modal={createModal} setModal={setCreateModal} collection={currentList} />
        <div className="org-wrapper ">
        <button className="admin-org__create" onClick={() => setCreateModal(true)}>Nowa</button>
        <div className="table-wrapper org-table-wrapper">
        <table className="table">
                <thead className="table-head">
                    <tr className="table-headers-row">
                        <th scope="col" className="table-header">Index</th>
                        <th scope="col" className="table-header">Nazwa</th>
                        <th scope="col" className="table-header">Cel</th>
                        <th scope="col" className="table-header">Zbiórka</th>
                        <th scope="col" className="table-header">Akcje</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {(foundations && currentList === 'foundations') && foundations.map((org, idx) => {
                        return (
                            <tr key={org.id} className="table-row">
                                <td className="table-data">{idx+1}</td>
                                <td className="table-data">{org.name}</td>
                                <td className="table-data">{org.goal}</td>
                                <td className="table-data">{org.items.join(', ')}</td>
                                <td className="table-data table-data__btns">
                                    <button className="table-btn table-btn_edit" onClick={() => chooseOrg(org.id, "edit")}>EDYTUJ</button>
                                    <button className="table-btn" onClick={() => chooseOrg(org.id, "delete")}>USUŃ</button>
                                </td>
                            </tr>
                        )
                    })}
                    {(ngos && currentList === 'ngos') && ngos.map((org, idx) => {
                        return (
                            <tr key={org.id} className="table-row">
                                <td className="table-data">{idx+1}</td>
                                <td className="table-data">{org.name}</td>
                                <td className="table-data">{org.goal}</td>
                                <td className="table-data">{org.items.join(', ')}</td>
                                <td className="table-data table-data__btns">
                                    <button className="table-btn table-btn_edit" onClick={() => chooseOrg(org.id, "edit")}>EDYTUJ</button>
                                    <button className="table-btn" onClick={() => chooseOrg(org.id, "delete")}>USUŃ</button>
                                </td>
                            </tr>
                        )
                    })}
                    {(locals && currentList === 'locals') && locals.map((org, idx) => {
                        return (
                            <tr key={org.id} className="table-row">
                                <td className="table-data">{idx+1}</td>
                                <td className="table-data">{org.name}</td>
                                <td className="table-data">{org.goal}</td>
                                <td className="table-data">{org.items.join(', ')}</td>
                                <td className="table-data table-data__btns">
                                    <button className="table-btn table-btn_edit" onClick={() => chooseOrg(org.id, "edit")}>EDYTUJ</button>
                                    <button className="table-btn" onClick={() => chooseOrg(org.id, "delete")}>USUŃ</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
        </>
    )
}

export default OrgPanel;
