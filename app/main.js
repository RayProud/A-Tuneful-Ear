import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './test';
import store from './createStore';

function render() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
