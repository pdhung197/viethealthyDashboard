import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

import counterReducer from './reducers/counter.reducers';

const rootReducer = combineReducers({
    counter: counterReducer
});

export function initializeStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}