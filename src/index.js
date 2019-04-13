import express from 'express';
import path from 'path';
const PORT = process.env.PORT || 5000;
const app = express();

import html from './html';
import serverRenderedApp from './server';

app.use(express.static(path.join(process.cwd(), '/dist')));
app.use(express.static(path.join(process.cwd(), '/static')));

app.get('/', (req, res) => {
    res.send(html(serverRenderedApp()));
});

app.get('/profile', (req, res) => {
    setTimeout(() => {
        res.json({
            name: 'roman',
            image: '/avatar.png'
        });
    }, 1500);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`)); // eslint-disable-line no-console
