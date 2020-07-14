import {SIGN_UP, SIGN_UP_ERROR, LOGIN, LOGIN_ERROR, LOGOUT} from './types';
import firebase from '../firebase/config';

export const signUp = ({email, password}) => async dispatch => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            console.log(response.user.uid)
            firebase.firestore().collection('users').doc(response.user.uid).set({
            username: '',
            email: email,
            createdAt: new Date()
        })
        .catch(error => {
            console.log('Something went wrong with adding user to firestore: ', error);
        })
    })
        .then(() => dispatch({type: SIGN_UP}))
        .catch((err) => dispatch({type: SIGN_UP_ERROR, payload: err}));
}

export const logIn = ({email, password}) => dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => dispatch({type: LOGIN}))
            .catch(err => dispatch({type: LOGIN_ERROR, payload: err.message}))
}


export const logOut = dispatch => {
        firebase.auth().signOut().then(() => dispatch({type: LOGOUT}))
}