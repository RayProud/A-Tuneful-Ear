import "babel-polyfill";

import App from './test';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './createStore';
import {startListeningGame} from './actions';

function onListenBtnClick() {
    store.dispatch(startListeningGame());
}

function render() {
    ReactDOM.render(
        <App onClick={onListenBtnClick} />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
