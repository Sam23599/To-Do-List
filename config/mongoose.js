const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/my_db';

const db = mongoose.connection;

db.on('error', (err)=>{
    console.log('MongoDb connection error', err);
});

db.once('open', ()=>{
    console.log('Connected to MongoDB!');
})