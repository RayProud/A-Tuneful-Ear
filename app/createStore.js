import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createReducer(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
