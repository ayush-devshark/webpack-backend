const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world', (req, res) => {
    const pathToHTMLFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentsFromHTML = fs.readFileSync(pathToHTMLFile, 'utf-8');
    res.send(contentsFromHTML);
});

app.get('/kiwi/', (req, res) => {
    const pathToHTMLFile = path.resolve(__dirname, '../dist/kiwi.html');
    const contentsFromHTML = fs.readFileSync(pathToHTMLFile, 'utf-8');
    res.send(contentsFromHTML);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
    console.log('Listening on port ' + 3000);
});
