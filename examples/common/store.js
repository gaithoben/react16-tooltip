import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import { middleware as tooltip } from '../../src/index';

const list = [tooltip];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer);

export default store;
