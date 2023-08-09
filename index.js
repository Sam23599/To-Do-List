const express = require('express');
const path = require('path');
const port = 3000;

const db = require('./config/mongoose');
const toDoList = require('./models/toDoList');

const app = express();

var List = {};

app.get('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        console.log('Error in running server', err);
    }
    return console.log(`Server is running on http://localhost:${port}`);
})