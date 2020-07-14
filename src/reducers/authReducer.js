import {SIGN_UP, SIGN_UP_ERROR, LOGIN, LOGIN_ERROR, LOGOUT} from '../actions/types';
const initialState = {
    authError: null,
    signupError: null,
    loginError: null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            console.log('user successfully signed up')
            return {
                ...state,
                authError: null,
                signupError: null
            };
        case SIGN_UP_ERROR:
            return {
                ...state,
                authError: action.payload.message,
                signupError: 'Ooops! Something went wrong. Please try again.'
            };
        case LOGIN:
            return {
                ...state,
                authError: null,
                loginError: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload,
                loginError: 'E-mail or password are incorrect.'
            }
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default authReducer;