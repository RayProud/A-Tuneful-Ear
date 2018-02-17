const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'dist')))
    .get('/', (req, res) => res.sendfile(path.join(__dirname, 'dist')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`)); // eslint-disable-line no-console
