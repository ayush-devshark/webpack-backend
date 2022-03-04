const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    const pathToHTMLFile = path.resolve(__dirname, '../dist/index.html');
    const contentsFromHTML = fs.readFileSync(pathToHTMLFile, 'utf-8');
    res.send(contentsFromHTML);
});

app.listen(3000, () => {
    console.log('Listening on port ' + 3000);
});
