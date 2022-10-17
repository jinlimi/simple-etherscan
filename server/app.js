const express = require('express');
const Web3 = require('web3');
const port = 8080;
const router = require('./routes');
const app = express();

const cors = require('cors');
app.use(cors());

app.use('/', router);

app.listen(port, ()=>{
    console.log('Server is listening ... on ', port);
})
