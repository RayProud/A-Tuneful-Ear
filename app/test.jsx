import React from 'react';
import ReactDOM from 'react-dom';

export default function App({some, title}) {
    console.log('some', some);
    console.log('title', title);
    const arr = [...title];
    console.log('arr', arr);
    ReactDOM.render(
        <div>Hey hey!</div>,
        document.getElementById('app')
    );
}