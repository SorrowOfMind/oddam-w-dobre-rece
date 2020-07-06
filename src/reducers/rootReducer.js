import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

import authReducer from './authReducer';
import giveawayReducer from './giveawayReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    giveaway: giveawayReducer
});

export default rootReducer;