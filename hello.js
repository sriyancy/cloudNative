const express = require('express');
var app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/hello', (req, res) => {
	res.send('Hello, my name is Sriyancy');
});
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
