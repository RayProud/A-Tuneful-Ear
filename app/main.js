import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './createStore';
import App from './containers/ListeningGame';

function render() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
