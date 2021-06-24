import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import gitReducer from './gitReducer/gitReducer';


let reducers = combineReducers({
    git: gitReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;