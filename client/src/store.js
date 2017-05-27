import { createStore, applyMiddleware } from 'redux';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

// Saga lib does all side effects (api calls) for redux
import mySaga from './sagas/sagas';

import rootReducer from './reducers/index';

// Initializes feathers client
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest';

const defaultStore = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultStore, applyMiddleware(sagaMiddleware));

const host = 'http://localhost:3030';
export const app = feathers()
    .configure(rest(host).superagent(superagent))
    .configure(feathers.hooks())
    .configure(feathers.authentication({ store: window.localStorage }));

sagaMiddleware.run(mySaga, app);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

