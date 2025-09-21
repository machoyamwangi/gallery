const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database
//let mongodb_url = 'mongodb://localhost:27017/';
//let dbName = 'darkroom';
//mongoose.connect(`${mongodb_url}${dbName}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
//    if (err) console.log(err)
//});



const MONGO_URI = `mongodb+srv://machoyamwangi_db_user:Gorjayas2010@cluster0.2jsyouj.mongodb.net/darkroom-dev?retryWrites=true&w=majority`;


// test if the database has connected successfully

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connected successfully!!'))
  .catch(err => console.error('MongoDB connection error:', err));


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0",() =>{
    console.log(`Server is listening at port ${PORT}`)
});
