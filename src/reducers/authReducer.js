import {SIGNUP, SIGNUP_ERROR, LOGIN, LOGIN_ERROR, LOGOUT} from '../actions/types';
const initialState = {
    authError: null,
    signupError: null,
    loginError: null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGNUP:
            return {
                ...state,
                authError: null,
                signupError: null
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                sauthError: action.payload,
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
                loginError: 'E-mail or passowrd are incorrect.'
            }
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default authReducer;