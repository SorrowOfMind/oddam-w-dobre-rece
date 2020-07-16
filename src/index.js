import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createFirestoreInstance, actionTypes} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import * as serviceWorker from './serviceWorker';

import './scss/main.scss';
import App from './App';
import store from './store';
import firebase from './firebase/config';

const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    updateProfileOnLogin: true,
    onAuthStateChanged: (authData, firebase, dispatch) => {
        if (!authData) {
            dispatch({type: actionTypes.CLEAR_DATA})
        }
    }
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App/>
    </ReactReduxFirebaseProvider>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
