const express = require('express');
const mg = require('mongoose');
const url = require('url');

// urls
const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/myApp';

const app = express();
// middleware
app.use(express.json());

// require routes
const login = require('./routes/login'); // this is just a test path for now
const signup = require('./routes/signup');

/* 
    imported routes are not working
    empty endpoints are working for now 

*/ 

// using imported routes
app.use('/',signup); // post method still works on empty endpoint
app.use('/login',login); // haven't implemented anything in this yet


// connects to local database
mg.connect(dbUrl,{  
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((res) => {
    console.log(`connected succesfully`);
})
.catch (err => {
    console.log(err);
    console.log('unable to connect');
});

// listening to the port
app.listen(port,() => {
    console.log(`listening to the port ${port}`)
})
