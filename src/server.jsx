import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './containers/ListeningGame';

module.exports = function render() {
     const content = ReactDOMServer.renderToString(
        <App />
    );

    return content;
}
