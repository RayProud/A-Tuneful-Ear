import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './test';
import store from './createStore';
import {startListeningGame} from './actions';

function onListenBtnClick() {
    store.dispatch(startListeningGame());
}

function render() {
    ReactDOM.render(
        <App store={store} onClick={onListenBtnClick} />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
