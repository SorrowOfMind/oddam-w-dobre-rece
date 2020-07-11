import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Loader from '../layout/Loader';
import CommonPanel from './CommonPanel';
import OrgPanel from './OrgPanel';

const MainPanel = ({uid, admin, currentList}) => {
    return (
        <>
            
            <div className="main-panel">
                {currentList === 'common' && <CommonPanel uid={uid}/>}
                {currentList !== 'common' && <OrgPanel currentList={currentList}/>}
            </div>
            
        </>
    )
}

export default MainPanel;
