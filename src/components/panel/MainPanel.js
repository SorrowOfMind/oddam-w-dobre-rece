import React from 'react';
import CommonPanel from './CommonPanel';
import OrgPanel from './OrgPanel';
import UsersPanel from './UsersPanel';

const MainPanel = ({uid, currentList, setDeletionModal}) => {
    
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
