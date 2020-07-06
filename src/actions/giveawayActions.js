import {GIVE_AWAY_SUCCESS, GIVE_AWAY_ERROR} from './types';
import firebase from '../firebase/config';

export const giveAway = (values, uid) => dispatch => {
    firebase.firestore().collection('aid').add({
        ...values,
        user: uid
    })
        .then(dispatch({type: GIVE_AWAY_SUCCESS}))
        .catch(err => dispatch({type: GIVE_AWAY_ERROR, payload: err.message}))
}