import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const middlewares = [thunk];
const final = applyMiddleware(...middlewares);

if (typeof window !== 'undefined') middlewares.push(createLogger());

export default initialState => createStore(reducer, initialState, final);
