import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/ListeningGame';

ReactDOM.hydrate(
    <App />,
    document.getElementById('app')
);
