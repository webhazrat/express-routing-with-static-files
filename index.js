const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;

var data = require('./data.js');
console.log(data);

app.use('/static', express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});


app.get('/:category/:post_url', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
