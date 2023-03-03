const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

//app.use(express.json());
app.use(cors());

require('./DB/config')();

console.log('Running at Port: ' + PORT);
app.listen(PORT);