import React from 'react';
import CommonPanel from './CommonPanel';
import OrgPanel from './OrgPanel';
import UsersPanel from './UsersPanel';

type PanelProps = {
    uid: string,
    currentList: string,
    setDeletionModal: Function
}

const MainPanel = ({uid, currentList, setDeletionModal}: PanelProps) => {
    
    return (
        <>
            <div className="main-panel">
                {currentList === 'common' && <CommonPanel uid={uid}/>}
                {(currentList !== 'common' && currentList !== 'users') && <OrgPanel currentList={currentList} setDeletionModal={setDeletionModal}/>}
                {currentList === 'users' && <UsersPanel />}
            </div>
        </>
    )
}

export default MainPanel;
