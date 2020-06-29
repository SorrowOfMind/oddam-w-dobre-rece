import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {reduxFirestore} from 'redux-firestore';
import firebase from './firebase/config';

import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, compose(
    middleware,
    reduxFirestore(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a));

export default store;