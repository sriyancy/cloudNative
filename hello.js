const express = require('express');
var app = express();
app.get('/hello', (req, res) => {
	res.send('Hello, my name is Sriyancy');
});
app.listen(3000);
