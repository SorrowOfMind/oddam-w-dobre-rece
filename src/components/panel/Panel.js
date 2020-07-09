import React from 'react';
import {useSelector} from 'react-redux';
import firebase from '../../firebase/config';

const Panel = () => {
    const user = useSelector(state => state.firebase.auth.uid);
   firebase.auth().currentUser.getIdTokenResult().then(idToken => console.log(idToken.claims.admin));
    return (
        <div>
            
        </div>
    )
}

export default Panel
